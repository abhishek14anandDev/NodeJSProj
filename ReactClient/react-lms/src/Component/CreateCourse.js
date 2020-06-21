import React from 'react'
import Axios from 'axios'
import { Alert } from 'react-bootstrap';

class CreateCourse extends React.Component{
    state = {'msg':'','CourseName' : '', 'CourseDescription':'','Duration': '','photo':''}
    handleChange = (event) =>{
      var id  =   event.target.id;
      if(id === 'courseName'){
          this.setState({CourseName : event.target.value})
      }else if(id === 'CourseDescription'){
          this.setState({CourseDescription: event.target.value})
      }else if(id === 'Duration'){
          this.setState({Duration: event.target.value})
      }else{
          this.setState({photo : event.target.value})
      }
    }

    CreateCourse = () =>{
        Axios.post('http://localhost:8000/courses/createCourse',{
            "name":this.state.CourseName,
            "description":this.state.CourseDescription,
            "photo":this.state.photo,
            "duration":this.state.Duration
        }).then(res=>{
            alert('success')
        })
    }
    render(){
        return (
            <div className="container col-sm-6 div-forms">
                
                    <div className="form-group">
                        <label for="courseName">Course Name</label>
                        <input type="text" className="form-control" id="courseName" placeholder="Enter your course name" aria-describedby="emailHelp" onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label for="CourseDescription">Description</label>
                        <input type="text" className="form-control" placeholder="Enter your Course description" id="CourseDescription" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label for="Duration">Duration</label>
                        <input type="number" className="form-control" placeholder="Enter your Course duration" id="Duration" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label for="CourseImage">Photo url</label>
                        <input type="text" className="form-control" id="CourseImage" placeholder="must be url" onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" onClick={this.CreateCourse}>Submit</button>
        <p className='alert alert-success'>{this.state.msg}</p>
            </div>
        )
    }
}

export default CreateCourse;