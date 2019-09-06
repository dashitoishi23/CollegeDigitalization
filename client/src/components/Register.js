import React, {Component} from 'react'
import axios from 'axios'

class Register extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            id: '',
            email:'',
            password:'',
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        const regisUser = {
            name: this.state.name,
            employeeID: this.state.id,
            emailhead: this.state.email,
            password: this.state.password
        }
        console.log(regisUser)
        axios.post('/api/faculty/regis',regisUser)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>console.log(err));

        this.props.history.push('/registerAuth')
        
    }
    render(){
        return(
            <div>
                <div style={{width: 500+"px",height: 400+"px",margin: 10+"px auto",float: "contour"}} className="input-group">
                <form onSubmit={this.onSubmit}>
                    <div class="input-group">
                    <label for="name" className="control-label" style={{fontSize: 20+"px",color: "blue"}}>Name</label>
        
                        <input type="text" name="name" className='form-control'
                         autocomplete="off" placeholder="Enter Name"
                        onChange={this.onChange}></input>
                    <span className="text-danger"></span>
                </div>
                <div className="input-group">
                    <label for="id" className="control-label" style={{fontSize: 20+"px",color: "blue"}}>EmployeeID</label>
                        <input type="text" name="id"className='form-control'
                         autocomplete="off" placeholder="Enter Your ID"
                        onChange={this.onChange}></input>
                    <span className="text-danger"></span>
                </div>
                <div className="input-group">
                    <label for="email" className="control-label" style={{fontSize: 20+"px",color: "blue"}}>IFHE Mail</label>
                        <input type="text" name="email" className='form-control'
                         autocomplete="off" placeholder="Enter Your IFHE mail"
                        onChange={this.onChange}></input>
                    <span className="text-danger"></span>
                </div>
                <div className="input-group">
                    <label for="password" className="control-label" style={{fontSize: 20+"px",color: "blue"}}>Password</label>
                        <input type="password" name="password" className='form-control'
                         autocomplete="off" placeholder="Enter Your Password"
                        onChange={this.onChange}></input>
                    <span className="text-danger"></span>
                </div>
                            
                <div className="input-group">
                    <input type="submit" name="btn-login" value="Register" className="btn btn-primary btn-block m-t-3" />
                        <br/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
export default Register;