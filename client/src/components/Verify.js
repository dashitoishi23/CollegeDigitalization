import React, {Component} from 'react'
import Axios from 'axios'

class Verify extends Component{
    constructor(){
        super();
        this.state={
            OTP:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const verify = {
            OTP: this.state.OTP
        }
        Axios.post('/api/faculty/otpVerify',verify)
        .then(res=>{
            console.log(res.data)
            if(res.data.note==='Success'){
                this.props.history.push('/')
            }
            else{
                this.props.history.push('/registerAuth')
            }
        })
        
    }
    render(){
        return(
            <div>
                <div style={{width: 500+"px",height: 400+"px",margin: 10+"px auto",float: "contour"}} className="input-group">
                <form onSubmit={this.onSubmit}>
                    <div class="input-group">
                    <label for="OTP" className="control-label" style={{fontSize: 20+"px",color: "blue"}}>OTP</label>
        
                        <input type="text" name="OTP" className='form-control'
                         autocomplete="off"
                        onChange={this.onChange}></input>
                    <span className="text-danger"></span>
                </div>
                </form>
                </div>
                <div className="input-group">
                    <input type="submit" name="btn-login" value="Verify" className="btn btn-primary btn-block m-t-3" />
                        <br/>
                    </div>
                </div>
        )
    }
}

export default Verify;