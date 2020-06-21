import React from 'react'

class CourseList extends React.Component{
    render(){
        return (
            <div class="container col-sm-6 div-forms">
            <h2 sty>Course List</h2>
           
            <div class="table-bordered table-striped table-responsive">          
                <table class="table">
                    <thead>
                        <tr>
                            
                            <th>Photo</th>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>Anna</td>
                            <td>Pitt</td>
                            <td>35</td>
                            <td>New York</td>
                            <td>
                                <input type="button" value="Edit" className="btn btn-info" data-toggle="modal" data-target="#EditCourse"/>
                                <input type="button" value="Delete" className="btn btn-danger" style={{marginLeft:"5px"}}/>
                            </td>
                        </tr>
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
                            
                            
                        </form>
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