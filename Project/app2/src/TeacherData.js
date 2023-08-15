import { useState } from "react";

function TeacherData()
{
    return(<>
    <center>
        <h2>Teachers (Select Subject/Dept.)</h2>
    </center>
    <hr></hr>

    <div>
    <center>
    <table >
        <tr>
            <td>Teacher Name</td>
            <td>
                <input type="text"></input>
            </td>
        </tr>
           <tr>
           <td>Subject</td>
            <td>
                <input type="text"></input>
            </td>
           </tr>

            <tr>
            <td>Department</td>
            <td>
                <input type="text"></input>
            </td>
            </tr>
            <tr>
            <td>Academic Year</td>
            <td>
                <input type="number"></input>
            </td>
            </tr>

            <tr>
                <td colSpan={2}>
                   <button>Add Teacher</button>
                </td>
            </tr>
    </table>
    </center>
    </div>
<hr></hr>
<br></br> <br></br>
    <div>
        <center>
            <table className="table table-bordered" style={{width:1000}}>
                <tbody>
                <tr>
                    <td style={{textAlign:"center", colSpan:3}}>
                        <h3>Table Metadata</h3>
                    </td>
                </tr>
                <tr>
                    <td><h5>Timetable</h5></td>
                    <td><h5>Dept</h5></td>
                    <td><h5>Start</h5></td>
                    <td><h5>End</h5></td>
                </tr>
                </tbody>
                
            </table>
        </center>
    </div>
    </>)

}
export default TeacherData;