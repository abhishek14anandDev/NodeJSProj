import React from 'react'
import axios from 'axios'

class CourseList extends React.Component{
    constructor(props){
        super(props)     
        this.state = {course : [],description:''} 
        //const name = ""  
     }
     
    

     DeleteCourse(event){
        let url = 'http://localhost:8000/courses/deleteCourse/' + event.target.value;

        axios.delete(url).then(res=>{
            alert(res.data.SuccessMessage)
        })
        //alert(id)
    }

    componentDidMount(){
            axios.get('http://localhost:8000/courses/listCourses')
                .then(response => {
                    console.log(JSON.stringify(response.data));
                    this.setState({course: response.data.courses})
                })
                .catch(error => {
                    console.log(error);
                });
                let url = 'http://localhost:8000/courses/viewCourse/' + "5eef73db7cf3865fd12826e3";

                axios.get(url)
                .then(res=>{
                    alert(res.data.name)
                    this.setState({description : res.data.description })
                })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8000/courses/listCourses')
        .then(response => {
            console.log(JSON.stringify(response.data));
            this.setState({course: response.data.courses,})
        })
        .catch(error => {
            console.log(error);
        });
    }

    ViewCourse(event){
        
        //alert(id)
    }

    render(){
       // const {name,description} = ""
        var courseList = this.state.course;
        return (
            <div class="container div-forms" style={{marginLeft:"170px"}}>
            <h2 sty>Course List</h2>
           
            <div>          
                <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                            
                            <th>Photo</th>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {courseList.map(t=>
                        <tr>
                            
                            <td><img src={t.photo}  width="60" height="60"/></td>
                            <td>{t.name}</td>
                            <td>{t.description}</td>
                            <td>{t.duration}</td>
                            <td>
                                <button type="button" value={t._id} className="btn btn-info" data-toggle="modal" data-target="#EditCourse" onClick={this.ViewCourse}>Edit</button>
                                <button type="button" value={t._id} className="btn btn-danger" style={{marginLeft:"5px"}} onClick={this.DeleteCourse} >Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

            <div class="modal fade" id="EditCourse" role="dialog">
                <div class="modal-dialog">
                
                {/* <!-- Modal content--> */}
                <div class="modal-content ">
                    <div class="modal-header divmodels">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Edit your Course</h4>
                    </div>
                    <div class="modal-body">
                    <div className="container div-forms">
                       
                            <div className="form-group">
                                <label for="courseName">Course Name</label>
                                <input type="text" className="form-control" id="courseName" value={this.state.name} placeholder="Enter your course name" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div className="form-group">
                                <label for="CourseDescription">Password</label>
                                <input type="text" className="form-control" placeholder="Enter your Course description" value={this.state.description} id="CourseDescription"/>
                            </div>

                            <div className="form-group">
                                <label for="Duration">Password</label>
                                <input type="number" className="form-control" placeholder="Enter your Course duration" value={this.state.duration} id="Duration"/>
                            </div>

                            <div className="form-group">
                                <label for="CourseImage">Password</label>
                                <input type="text" className="form-control" id="CourseImage" placeholder="must be url" value={this.state.photo}/>
                            </div>
                            
                            
                        
            </div>
                    </div>
                    <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        )
    }
}

export default CourseList;