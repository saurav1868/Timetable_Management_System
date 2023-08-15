import { useState } from "react";



function Functionalities() {

    const [defaultFunctionalities, setDefaultFunctionalities] = useState(["Sign up", "Login",
        "Log out", "Edit Profile", "View timetable", "Feedback", "Notifications",
        "Settings"]);

    const [functionalities, setfunctionalities] =
        useState(["Settings", "View lecture data", "Add leave application", "Manage users",
            "Manage timatable", "Schedule management", "View reports"]);

    const [roles, setRole] =
        useState(["Student", "Teacher", "HOD", "Principal"]);



        return(<>
        <div className="container">

            <center>
            <div className="MU1">Manage Role Functionalities</div>
            </center>
        <center>
          <table className="table table-bordered">
      <thead className="text7">
        <tr>
          <th>Role</th>
          <th>Functionalities</th>
          
        </tr>
      </thead>
      <tbody className="text6">
        <tr>
          <td >
          {roles.map((role, index) => (
                            <div className="text8">
                                <input type="checkbox"key={index}></input>&nbsp;&nbsp;{role}
                                </div>
              ))}
          </td>
          <td>
            <select>
                {functionalities.map((functionality, index) => (
                     <option>
                        <h4>
                            <input type="checkbox"
                                key={index}
                            ></input>
                            {functionality}
                        </h4>
                        </option>
                 ))};
                
            </select>
          
          </td>
         
        </tr>
      </tbody>
    </table>
          </center>

        </div>
        </>)
}
export default Functionalities;