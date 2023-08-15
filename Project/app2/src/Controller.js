import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManageClassRoom from './ManageClassRoom';
import Admin from "./Admin";
import ReportAnalysis from "./ReportAnalysis";
import SchedulingManagement from "./SchedulingManagement";
import TeacherData from "./TeacherData";
import ManageUsers from "./ManageUsers";
import Functionalities from "./Functionalities";
import Header from "./Header";
import Sidebar from "./SideBar";
import Managetimetable from "./manageTimeTable";
import Signin from "./signin";


function Controller() {
    debugger;
    return (
        <>
        <Header></Header>
        <Sidebar></Sidebar>
            <BrowserRouter>
           <Switch>
                <Route
                    path="/"
                    exact
                    component={Signin}>
                </Route>
                <Route
                    path="/Admin"
                    exact
                    component={Admin}>
                </Route>
                <Route
                    path="/ManageClassRoom"
                    exact
                    component={ManageClassRoom}>
                </Route>
                <Route
                    path="/ReportAnalysis"
                    exact
                    component={ReportAnalysis}>    
                </Route>
                <Route
                    path="/SchedulingManagement"
                    exact
                    component={SchedulingManagement}>    
                </Route>
                <Route 
                    path="/TeacherData"
                    exact
                    component={TeacherData}>
                </Route>
                <Route
                    path="/ManageUsers"
                    exact
                    component={ManageUsers}>
                </Route>
                <Route
                path="/Functionalities"
                exact
                component={Functionalities}>
                </Route>
                <Route
                path="/Managetimetable"
                exact
                component={Managetimetable}>
                </Route>
            </Switch>
        </BrowserRouter>
        </>
        
    );
}

export default Controller;