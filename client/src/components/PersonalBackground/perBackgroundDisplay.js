import React, {Component} from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './CSS.css';
import Spinner from '../Spinner/spinner';

class PersonalBackgroundDisplay extends Component{
   constructor(props){
       super(props);
       this.state={
           detail:[],
           loading:true
       }
   }
   componentDidMount(){
    Axios.get('/api/faculty/persbackgrounddetail')
    .then(res=>{
        this.setState({detail:res.data,loading:false});
    })
    .catch(err=>{
        console.log(err);
    })
    
   }
   
    render(){
        
        const style={
            border:'1px solid black',
            
    
        }
        let detail='';
        let loading=this.state.loading;
        if(this.state.detail.data==='undefined'&&loading==true){
            detail=<Spinner/>
        }
        else{
           detail=this.state.detail.map((data,index)=>{
                return(
                    <tr key={index}>
                  <td>{data.Exam_Passed}</td>
                  <td>{data.Specialization}</td>
                  <td>{data.Institute}</td>
                  <td>{data.University}</td>
                  <td>{data.Year_of_Passing}</td>
                  <td>{data.Grade}</td>
                  <td>{data.Marks}</td>
                </tr>
                )
            });
        }
       

        return(
            <div>
            <table style={style}>
                <tbody>
            <tr>
              <th>Passed</th>
              <th>Specialization</th>
              <th>Institute</th>
              <th>University</th>
              <th>Year_of_Passing</th>
              <th>Grade</th>
              <th>Marks</th>
            </tr>

            {detail}

            
            </tbody>
          </table>
<h1><Link to='/persBackground'>Add</Link></h1>
            </div>
            
        )
    }
}

export default PersonalBackgroundDisplay;
