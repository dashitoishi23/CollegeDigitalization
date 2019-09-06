import React, {Component} from 'react'
import Axios from 'axios';

class PersBackground extends Component{
constructor(props){
    super(props);
    this.state={
        Exam_Passed:'',
        Specialization:'',
        Institute:'',
        University:'',
        Year_of_Passing:'',
        Grade:'',
        Marks:''
    }
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
    e.preventDefault();
    const persbackground={
        Exam_Passed:this.state.Exam_Passed,
        Specialization:this.state.Specialization,
        Institute:this.state.Institute,
        University:this.state.University,
        Year_of_Passing:this.state.Year_of_Passing,
        Grade:this.state.Grade,
        Marks:this.state.Marks
    };
    Axios.post('/api/faculty/background',persbackground)
    .then(res=>{
        this.props.history.push('/dashboard')
    })
    .catch(err=>{
        console.log(err);
    })
}


render(){
    return(
        <form onSubmit={(e)=>this.onSubmit(e)}>
        <div className="form-group">
        <label for="exampleFormControlInput1">Exam_Passed</label>
        <input type="text" className="form-control" name="Exam_Passed"
        value={this.state.Exam_Passed}
        id="exampleFormControlInput1" onChange={(event) => this.onChange(event)}/>
        </div>

        <div className="form-group">
        <label for="exampleFormControlInput1">Specialization</label>
        <input type="text" className="form-control" 
        value={this.state.Specialization}
        name="Specialization" id="exampleFormControlInput1" onChange={(event) => this.onChange(event)}/>
        </div>

        <div className="form-group">
        <label for="exampleFormControlInput1">College/Institute</label>
        <input type="text" className="form-control" 
        value={this.state.Institute}
        name="Institute" id="exampleFormControlInput1" onChange={(event) => this.onChange(event)}/>
        </div>

        <div className="form-group">
        <label for="exampleFormControlInput1">Board/University</label>
        <input type="text" className="form-control"
        value={this.state.University}
        name="University" id="exampleFormControlInput1" onChange={(event) => this.onChange(event)}/>
        </div>

        <div className="form-group">
        <label for="exampleFormControlInput1">Year of Passing</label>
        <input type="text" className="form-control" 
        value={this.state.Year_of_Passing}
        name="Year_of_Passing" id="exampleFormControlInput1" onChange={(event) => this.onChange(event)}/>
        </div>

        <div className="form-group">
        <label for="exampleFormControlInput1">Class/Grade</label>
        <input type="text" className="form-control"
        value={this.state.Grade}
        name="Grade" id="exampleFormControlInput1" onChange={(event) => this.onChange(event)}/>
        </div>

        <div className="form-group">
        <label for="exampleFormControlInput1">Percentage of Marks/CGPA</label>
        <input type="text" className="form-control"
        value={this.state.Marks}
        name="Marks" id="exampleFormControlInput1" onChange={(event) => this.onChange(event)}/>
        </div>
       
    <div className="input-group">
                <input type="submit" name="btn-login" 
                onClick={(e)=>this.onSubmit(e)}
                value="Add Info" className="btn btn-primary btn-block m-t-3" />

    </div>
    </form>
    )
}

}

export default PersBackground;