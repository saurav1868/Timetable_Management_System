import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "./Header";
import Managetimetable from "./manageTimeTable";
import Sidebar from "./SideBar";


function Controller1() {
    return (
        <>
           <Header></Header>
           <Sidebar></Sidebar>
            <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Managetimetable}>
                </Route>

                <Route
                    path="/Managetimetable"
                    exact
                    component={Managetimetable}>
                </Route>

                <Route
                    path="/login"
                    exact
                    component={Managetimetable}>
                </Route>

                

            </Switch>
        </BrowserRouter>
        </>
        
    );
}

export default Controller1;