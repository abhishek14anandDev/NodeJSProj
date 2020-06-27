import React from 'react'
import '../Content/css/login.css'

import './CourseDashboard'
import { Redirect,useHistory,withRouter } from 'react-router-dom';
import axios from 'axios'

class UserComponent extends React.Component{
   constructor(props){
      super(props)
      this.status = false;
   }
   state = {status : false,EmailId:'',password : '',fullName :'',userType:''}
    
   HandleuserNameChanges = (event) =>{
      this.setState({EmailId : event.target.value})
   }
   handlePasswordChanges = (event)=>{
      this.setState({password : event.target.value})
   }
   validateUser=()=>{
      const user = {
         EmailId : this.state.EmailId,
         password : this.state.password
      }

      let url = "http://localhost:8000/login";
     
      
      axios.post('http://localhost:8000/login',{EmailId : this.state.EmailId,
      password : this.state.password })
         .then(
            res=>{
               alert(JSON.stringify(res))
               //return <Redirect to="/CourseDashboard"/>  
               
               this.setState({status:true})
            }
         )
         .catch(err=>{
            
            alert('invalid credential')
            
            //this.setState({status:true})
         })
     
   }

   handleChange = (event) =>{
      var id  =   event.target.id;
      if(id === 'fullName'){
          this.setState({fullName : event.target.value})
      }else if(id === 'userType'){
          this.setState({userType: event.target.value})
      }else if(id === 'userEmailId'){          
          this.setState({EmailId: event.target.value})          
      }else if(id === 'password'){          
         this.setState({password: event.target.value})
    }
   }

   RegisterUser = () =>{
      axios.post('http://localhost:8000/register',{
         "fullName": this.state.fullName,
         "TypeOfuser": this.state.userType,
         "EmailId":this.state.EmailId,
         "password":this.state.password
      }).then(res=>{
         alert(res.data.SuccessMessage)
      }).catch(err=>alert(err))
   }
    render(){ 
      
       if(this.state.status)
         return <Redirect to="/CourseDashboard"/>
         
        return(            
<div className="container">
 
            <div className="sidenav">
         <div className="login-main-text">
            <h2>LMS<br/> Login Page </h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div style={{display:"flex"}}>
         <div className="col-md-6 col-sm-12">
            <div id="loginForm" className="login-form" >
              
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name" onChange={this.HandleuserNameChanges}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChanges}/>
                  </div>
                  <button className="btn btn-black"  onClick={this.validateUser}>Login</button>
                 
              
            </div>

           
         </div>

         <div className="col-md-6 col-sm-12" style={{marginBottom:"35px"}}>

            <div id="loginForm" className="login-form" >
             
                  <div className="form-group">
                     <label>Full name</label>
                     <input id="fullName" type="text" className="form-control" placeholder="Enter your name" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                     <label>User type</label>
                     <input id="userType" type="text" className="form-control" placeholder="Enter your user type" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                     <label>Email id</label>
                     <input id="userEmailId" type="Emailid" className="form-control" placeholder="Enter your email id" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange}/>
                  </div>
                  
                  <button type="submit" className="btn btn-secondary" onClick={this.RegisterUser}>Register</button>
              
            </div>

           
         </div>
         </div>      
      </div>

    </div>
        )
    }
}

export  default UserComponent;