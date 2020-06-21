import React from 'react'
import { ReactBurgerMenu } from 'react-burger-menu'

class ChangePassword extends React.Component{
    state = {'msg':'','EmailID' : '', 'password':'','NewPassword': ''}
    handleChange = (event) =>{
      var id  =   event.target.id;
      if(id === 'userEmailID'){
          this.setState({CourseName : event.target.value})
      }else if(id === 'userPassword'){
          this.setState({CourseDescription: event.target.value})
      }else if(id === 'userNewpassword'){          
          this.setState({Duration: event.target.value})
      }else{
          this.setState({photo : event.target.value})
      }
    }
    render(){
        return (
            <div className="container col-sm-6 div-forms">
           
                <div className="form-group">
                    <label for="userEmailID">Email Id</label>
                    <input type="Email" className="form-control" id="userEmailID" placeholder="Enter your Email id" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="form-group">
                    <label for="userPassword">Password</label>
                    <input type="Password" className="form-control" placeholder="Enter your current password" id="userPassword"/>
                </div>

                <div className="form-group">
                    <label for="userNewpassword">New password</label>
                    <input type="password" className="form-control" placeholder="Enter your New password" id="userNewpassword"/>
                </div>

                <div className="form-group">
                    <label for="userConfPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="userConfPassword" placeholder="Enter your confirm password"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
           
        </div>
        )
    }
}

export default ChangePassword;