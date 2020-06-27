import React from 'react'
import { ReactBurgerMenu } from 'react-burger-menu'
import Axios from 'axios'
import { Alert } from 'react-bootstrap'

class ChangePassword extends React.Component{
    state = {msg:'',EmailID : '', password:'',NewPassword: '',ConfirmPassword : ''}
    handleChange = (event) =>{
      var id  =   event.target.id;
      if(id === 'userEmailID'){
          this.setState({EmailID : event.target.value})
      }else if(id === 'userPassword'){
          this.setState({password: event.target.value})
      }else if(id === 'userNewpassword'){          
          this.setState({NewPassword: event.target.value})
      }else{
          this.setState({ConfirmPassword : event.target.value})
      }
    }

    ChangePassword = () =>{
        let npwd = this.state.NewPassword;
        let cpwd = this.state.ConfirmPassword;

        if(npwd == cpwd){
            this.setState({msg : ''})
            Axios.post('http://localhost:8000/changePasssword',{
                EmailId : this.state.EmailID,
                password : this.state.password,
                NewPassword : this.state.NewPassword
           }).then(res => {
               console.log(res)
            alert('password changed successfully' +res)
           })
        }else{
            alert("New password add confirm password should be same")
        }
        
    }
    render(){
        return (
            <div className="container col-sm-6 div-forms">
           
                <div className="form-group">
                    <label for="userEmailID">Email Id</label>
                    <input type="Email" className="form-control" id="userEmailID" placeholder="Enter your Email id" aria-describedby="emailHelp" onChange={this.handleChange}/>
                    
                </div>
                <div className="form-group">
                    <label for="userPassword">Password</label>
                    <input type="Password" className="form-control" placeholder="Enter your current password" id="userPassword" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label for="userNewpassword">New password</label>
                    <input type="password" className="form-control" placeholder="Enter your New password" id="userNewpassword" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label for="userConfPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="userConfPassword" placeholder="Enter your confirm password" onChange={this.handleChange}/>
                </div>
                
                <button type="submit" class="btn btn-primary" onClick={this.ChangePassword}>Change Password</button>
           
        </div>
        )
    }
}

export default ChangePassword;