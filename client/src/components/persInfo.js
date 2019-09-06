import React, {Component} from 'react'
import Axios from 'axios';

class persInfo extends Component{
    constructor(){
        super();
        this.state={

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const persinfo={
            fatherName:this.state.fatherName,
            motherName:this.state.motherName,
            gender:this.state.gender,
            age:this.state.age,
            address:this.state.address
        };
        Axios.post('/api/faculty/persinfo',persinfo)
        .then(res=>{
            this.props.history.push('/dashboard')
        })
        .catch(err=>{

        })
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <label for="exampleFormControlInput1">Father's Name</label>
            <input type="text" className="form-control" name="fatherName" id="exampleFormControlInput1" onChange={this.onChange}/>
            </div>
            <div className="form-group">
            <label for="exampleFormControlInput2">Mother's Name</label>
            <input type="text" className="form-control" name="motherName" id="exampleFormControlInput2" onChange={this.onChange}/>
            </div>
            <div classNameName="form-group">
            <label for="exampleFormControlInput4">Gender</label>
            <select id="exampleFormControlInput4" name="gender" className="form-control" onChange={this.onChange}>
            <option selected>Male</option>
            <option>Female</option>
      </select>
            </div>
        <div classNameName="form-group">
            <label for="exampleFormControlInput3">Age</label>
            <input type="text" className="form-control" name="age" id="exampleFormControlInput3" onChange={this.onChange}/>
            </div>
        <div classNameName="form-group">
            <label for="exampleFormControlInput4">Religion</label>
            <input type="text" className="form-control" name="religion" id="exampleFormControlInput4" onChange={this.onChange}/>
            </div>
            <div classNameName="form-group">
            <label for="exampleFormControlInput5">Nationality</label>
            <input type="text" className="form-control" name="Nationality" id="exampleFormControlInput5" onChange={this.onChange}/>
            </div>
            <div classNameName="form-group">
            <label for="exampleFormControlInput6">Mobile Number</label>
            <input type="number" className="form-control" name="mobile" id="exampleFormControlInput6" onChange={this.onChange}/>
            </div>
            <div classNameName="form-group">
            <label for="exampleFormControlInput7">Alternate Number</label>
            <input type="text" className="form-control" name="alt_num" id="exampleFormControlInput7" onChange={this.onChange}/>
            </div>
            <div classNameName="form-group">
            <label for="exampleFormControlInput8">Aadhar Number</label>
            <input type="text" className="form-control" name="aadhar" id="exampleFormControlInput8" onChange={this.onChange}/>
            </div>
            <div classNameName="form-group">
            <label for="exampleFormControlInput9">PAN</label>
            <input type="text" className="form-control" name="pan" id="exampleFormControlInput9" onChange={this.onChange}/>
            </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Address</label>
            <textarea className="form-control" name="address" id="exampleFormControlTextarea1" rows="3" onChange={this.onChange}></textarea>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea2">Current Address</label>
            <textarea className="form-control" name="curArr" id="exampleFormControlTextarea2" rows="3" onChange={this.onChange}></textarea>
        </div>
        <div className="input-group">
                    <input type="submit" name="btn-login" value="Add Info" className="btn btn-primary btn-block m-t-3" />
    
        </div>
        </form>
        )
    }
}

export default persInfo;

