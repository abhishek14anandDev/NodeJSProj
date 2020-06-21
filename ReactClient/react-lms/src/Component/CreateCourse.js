import React from 'react'

class CreateCourse extends React.Component{
    render(){
        return (
            <div className="container col-sm-6 div-forms">
                <form>
                    <div className="form-group">
                        <label for="courseName">Course Name</label>
                        <input type="text" className="form-control" id="courseName" placeholder="Enter your course name" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="form-group">
                        <label for="CourseDescription">Password</label>
                        <input type="text" className="form-control" placeholder="Enter your Course description" id="CourseDescription"/>
                    </div>

                    <div className="form-group">
                        <label for="Duration">Password</label>
                        <input type="number" className="form-control" placeholder="Enter your Course duration" id="Duration"/>
                    </div>

                    <div className="form-group">
                        <label for="CourseImage">Password</label>
                        <input type="text" className="form-control" id="CourseImage" placeholder="must be url"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCourse;