import React,{Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginCust } from '../actions/authActions'
import classnames from 'classnames'

class Home extends Component{
    constructor(){
        super();
        this.state={
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

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }

        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    onSubmit(e){
        e.preventDefault();
        const loginUser = {
            employeeID: this.state.email,
            password: this.state.password
        }
        this.props.loginCust(loginUser)
    }
    render(){
        const { errors } = this.state
        return(
                <div>
                <div style={{width: 500+"px",height: 400+"px",margin: 10+"px auto",float: "contour"}} className="input-group">
                <form onSubmit={this.onSubmit}>
                    <div class="input-group">
                    <label for="email" className="control-label" style={{fontSize: 20+"px",color: "blue"}}>Email</label>
        
                        <input type="text" name="email" className={classnames('form-control',{
                            'is-invalid':errors.email
                        })}
                         autocomplete="off" placeholder="Enter Email Address"
                        onChange={this.onChange}></input>
                        {errors.email && (
                            <div className='invalid-feedback'>{errors.email}</div>
                        )}
                    <span className="text-danger"></span>
                </div>
                <div className="input-group">
                    <label for="password" className="control-label" style={{fontSize: 20+"px",color: "blue"}}>Password</label>
                        <input type="password" name="password"className={classnames('form-control',{
                            'is-invalid':errors.password
                        })} 
                         autocomplete="off" placeholder="Enter Your Password"
                        onChange={this.onChange}></input>
                          {errors.password && (
                            <div className='invalid-feedback'>{errors.password}</div>
                        )}
                    <span className="text-danger"></span>
                </div>
        
                <div className="input-group">
                    <input type="submit" name="btn-login" value="Login" className="btn btn-primary btn-block m-t-3" />
                        <br/>
                            <a href="register.php" style={{color: "blue",fontSize: 20+"px",float: "left"}}>New User? Register Here!</a>
                    </div>
                </form>
                </div>
            </div>
            )
    }
    
}

Home.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.func.isRequired,
    errors: PropTypes.func.isRequired 
}

const mapStateToProps = (state) =>({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ loginCust })(Home);