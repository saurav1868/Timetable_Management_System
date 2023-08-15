import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Footer from "./Footer";
import "./common.css"

function ManageClassRoom() {
    return(
        <>
            <div>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th colSpan={5} className="text1">Manage Class Rooms</th>
                    </tr>
                    <tr>
                        <th className="text2">Dept. Name</th>
                        <th className="text2">Year</th>
                        <th className="text2">Sem</th>
                        <th className="text2">Classroom</th>
                        <th className="text2">Labs</th>
                    </tr>
                    <tr className="text3">
                        <td>Civil</td>
                        <td>2023</td>
                        <td>III Sem</td>
                        <td>A-301</td>
                        <td>A-105</td>
                    </tr>
                    <tr className="text3">
                        <td>Mech</td>
                        <td>2023</td>
                        <td>III Sem</td>
                        <td>B-301</td>
                        <td>B-105</td>
                    </tr>
                    <tr className="text3">
                        <td>Computer Science</td>
                        <td>2023</td>
                        <td>III Sem</td>
                        <td>C-301</td>
                        <td>C-105</td>
                    </tr>
                    <tr className="text3">
                        <td>Civil</td>
                        <td>2023</td>
                        <td>V Sem</td>
                        <td>A-201</td>
                        <td>A-106</td>
                    </tr>
                    <tr className="text3">
                        <td>Computer Scienc</td>
                        <td>2023</td>
                        <td>V Sem</td>
                        <td>B-201</td>
                        <td>B-106</td>
                    </tr>
                    <tr className="text3">
                        <td>Mech</td>
                        <td>2023</td>
                        <td>V Sem</td>
                        <td>C-201</td>
                        <td>C-106</td>
                    </tr>
                    <tr className="text3">
                        <td>Civil</td>
                        <td>2023</td>
                        <td>VII Sem</td>
                        <td>A-101</td>
                        <td>A-107</td>
                    </tr>
                    <tr className="text3">
                        <td>Computer Scienc</td>
                        <td>2023</td>
                        <td>VII Sem</td>
                        <td>B-101</td>
                        <td>B-107</td>
                    </tr>
                    <tr className="text3">
                        <td>Mech</td>
                        <td>2023</td>
                        <td>VII Sem</td>
                        <td>C-101</td>
                        <td>C-107</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ManageClassRoom;