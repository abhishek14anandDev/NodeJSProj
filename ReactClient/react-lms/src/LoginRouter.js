import React from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import CourseDashboard from './Component/CourseDashboard'
import UserComponent from './Component/UserComponent'
import ChangePassword from './Component/ChangePassword'
import CourseList from './Component/CourseList'
import EditProfile from './Component/EditProfile'

class LoginRouter extends React.Component{
    render(){
        return(
            <Router>
                 <Link to="/"></Link>
                <Switch>
                <Route exact path="/">
                        <UserComponent/>
                    </Route>
               
                    <Route exact path="/CourseDashboard">
                        <CourseDashboard/>
                    </Route>
                    <Route exact path="/Changepassword">
                        <ChangePassword/>
                    </Route>
                    <Route exact path="/CourseList">
                        <CourseList/>
                    </Route>
                    <Route exact path="/CreateCourse">
                        <CourseList/>
                    </Route>
                    <Route exact path="/EditProfile">
                       <EditProfile/>
                    </Route>
                   
                </Switch>
            </Router>
        )
    }
}
export default LoginRouter