import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./common.css"

function Admin() {
    return(
        <>
            <div>
                <div className="midCon">
                    <li className="midIn">
                      <a href="/ManageUsers">Manage Users</a>
                    </li>
                </div>
                <div className="midCon">
                    <li className="midIn">
                      <a href="/Managetimetable">Manage Time Table</a> 
                    </li>
                </div>
                <div className="midCon">
                    <li className="midIn">
                    <a href="/ManageClassRoom">Manage Classrooms</a> 
                    </li>
                </div>
                <div className="midCon">
                    <li className="midIn">
                    <a href="/SchedulingManagement">Schedule Management</a> 
                    </li>
                </div>
                <div className="midCon">
                    <li className="midIn">
                    <a href="/ReportAnalysis">Reports & Analysis</a> 
                    </li>
                </div>
            </div>
        </>
    );
}

export default Admin;