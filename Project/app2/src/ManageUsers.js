import { useState } from "react";

function ManageUsers()
{
    const [roles, setRole] =
    useState(["Student", "Teacher", "HOD", "Principal"]);

    return(<>
 <div className="container">
 <div className="MU">Manage Users</div>
 

<div className="responsive" style={{textAlign:"right",marginBottom:"1%"}}>
   <label htmlFor="dropdown"></label>
      <select id="dropdown" >
        <option value="">-- Select Option --</option>
        {roles.map((role, index) => (
                       <option value={role}>{role}</option>
                    ))};
      </select>
</div>
<center></center>

   <div className="table table-responsive">
    <table className="table table-bordered" style={{width:1200, alignContent:"center", fontSize:20}}>
        <thead>
        <tr className="text4">
                <td>Id</td>
                <td>Name</td>
                <td>Role</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody className="text5">
            <tr>
                <td>S1</td>
                <td>Saurav Sanap</td>
                <td>Student</td>
                <td>
                    <button className="btn btn-warning">Update</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
            <tr>
                <td>S2</td>
                <td>Rohan Khidrapure</td>
                <td>Student</td>
                <td>
                    <button className="btn btn-warning">Update</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>

            <tr>
                <td>T1</td>
                <td>Sanjay Bhise</td>
                <td>Teacher</td>
                <td>
                    <button className="btn btn-warning">Update</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>

            <tr>
                <td>T2</td>
                <td>Prakhar Joshi</td>
                <td>Teacher</td>
                <td>
                    <button className="btn btn-warning">Update</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>

            <tr>
                <td>H1</td>
                <td>Harish Pandhare</td>
                <td>HOD</td>
                <td>
                    <button className="btn btn-warning">Update</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>

            <tr>
                <td>H1</td>
                <td>Rohit Karmalkar</td>
                <td>HOD</td>
                <td>
                    <button className="btn btn-warning">Update</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>

   </table>
   </div>
 </div>

 <hr></hr>
 <br></br><br></br>

<div  style={{marginLeft:"45%"}}>
        <a href="/Functionalities" className="btn btn-success btn-lg">Add User</a>
</div>

    
    </>)
}
export default ManageUsers;