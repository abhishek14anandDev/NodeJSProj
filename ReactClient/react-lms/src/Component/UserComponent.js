import React from 'react'
import '../Content/css/login.css'

import './CourseDashboard'
import { Redirect,useHistory,withRouter } from 'react-router-dom';

class UserComponent extends React.Component{
   constructor(props){
      super(props)
      this.status = false;
   }
   state = {status : false}
   
   validateUser=()=>{
      //let history = useHistory();
      //this.props.history.push('/CourseDashboard01')
      //history.push("/CourseDashboard01");
      //return <Redirect to="/CourseDashboard"/>
     
      //return <Redirect to="/CourseDashboard"/>
        this.setState({status:true})
        //this.status = true
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
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <button className="btn btn-black"  onClick={this.validateUser}>Login</button>
                 
               </form>
            </div>

           
         </div>

         <div className="col-md-6 col-sm-12">

            <div id="loginForm" className="login-form" >
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  
                  <button type="submit" className="btn btn-secondary" >Register</button>
               </form>
            </div>

           
         </div>
         </div>      
      </div>

    </div>
        )
    }
}

export  default UserComponent;