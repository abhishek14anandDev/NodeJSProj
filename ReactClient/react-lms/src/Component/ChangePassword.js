import React from 'react'
import { ReactBurgerMenu } from 'react-burger-menu'

class ChangePassword extends React.Component{
    render(){
        return (
            <div className="container col-sm-6 div-forms">
            <form>
                <div className="form-group">
                    <label for="userEmailID">Email Id</label>
                    <input type="Email" className="form-control" id="userEmailID" placeholder="Enter your Email id" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="form-group">
                    <label for="userPassword">Password</label>
                    <input type="Password" className="form-control" placeholder="Enter your current password" id="CourseDescription"/>
                </div>

                <div className="form-group">
                    <label for="userNewpassword">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your New password" id="userNewpassword"/>
                </div>

                <div className="form-group">
                    <label for="userConfPassword">Password</label>
                    <input type="password" className="form-control" id="userConfPassword" placeholder="Enter your confirm password"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}

export default ChangePassword;