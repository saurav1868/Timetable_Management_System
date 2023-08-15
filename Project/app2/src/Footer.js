import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./common.css";
var showdate = new Date();
var dt = showdate.toDateString();

function Footer() {
    return(
        <div className="footer">
            <centre> 
                <h1 className="footertxt">Timetable @ 2023</h1> 
            </centre>
            <div className="footerDate">{dt}</div>
        </div>
        
    )
}
export default Footer;