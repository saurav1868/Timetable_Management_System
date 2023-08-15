import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function Registration() {
    debugger
    const history = useHistory();
    const [createUser, setCreateUser] = useState({ first_name: "", email: "", passwd: "", last_name: "", confirm_password: "", mobile: "" });
    const [msg, setMsg] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setMsg("");
        }, 2500)
    }, [msg]);

    const textChange = (args) => {
        var copyCredentials = { ...createUser };
        copyCredentials[args.target.name] = args.target.value;
        setCreateUser(copyCredentials);
    }

    const validate = () => {
        debugger
        const checkEmail = createUser.email;
        if (checkEmail == "" || createUser.passwd == "" || createUser.first_name == "" || createUser.last_name == "" || createUser.confirm_password == "" || createUser.mobile == "") {
            setMsg("Fields cannot be empty!");
            return 0;
        }
        else if ((checkEmail.includes("@") && checkEmail.includes(".") && (checkEmail.includes("com") || checkEmail.includes("in")))) {
            
            if(createUser.passwd==createUser.confirm_password){
                return 1;
            }
            else{
                setMsg("Password Mismatch");
                return 0;
            }
            
        }
        else {
            setMsg("Invalid Email");
            return 0;
        }
    }

    const register = () => {

        var num = validate();

        if (num == 0) {
            return
        }

        var user =
        {
            "first_name": createUser.first_name,
            "last_name": createUser.last_name,
            "email": createUser.email,
            "passwd": createUser.passwd,
            "mobile": createUser.mobile,
        }

        var helper = new XMLHttpRequest();

        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                debugger
                var reply = JSON.parse(helper.responseText);

                if (reply.alreadyRegistered == 'true') {

                    setMsg("User already exists");
                }
                else if (reply.isRegister == 'true') {
                    history.push('/login');
                }

            }
        }

        helper.open("POST", "http://127.0.0.1:9998/registeration");
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(user));
    }

    return (
        <>

            <h2 style={{ fontFamily: "monospace",textAlign:"center",marginTop: "230px"  }}>REGISTER</h2>

            <div className="table-responsive">
                <center>
                    <table style={{ marginTop: "20px" }}>
                        <tbody>

                            <tr>
                                <td style={{ textAlign: "right" }}>
                                    <label for="inputfirst_name">First Name :  </label>
                                    &nbsp;
                                </td>

                                <td>
                                    <input type="name"
                                        name="first_name"
                                        id="inputfirst_name"
                                        value={createUser.first_name}
                                        className="form-control"
                                        required="required"
                                        onChange={textChange} />
                                </td>
                                <td style={{ textAlign: "left", color: "red" }}>&nbsp;*</td>
                            </tr>

                            <br />

                            <tr>
                                <td style={{ textAlign: "right" }}>
                                    <label for="inputlast_name">Last Name :  </label>
                                    &nbsp;
                                </td>

                                <td>
                                    <input type="name"
                                        name="last_name"
                                        id="inputlast_name"
                                        value={createUser.last_name}
                                        className="form-control"
                                        required="required"
                                        onChange={textChange} />
                                </td>
                                <td style={{ textAlign: "left", color: "red" }}>&nbsp;*</td>
                            </tr>

                            <br />

                            <tr>
                                <td style={{ textAlign: "right" }}>
                                    <label for="inputemail">Email :  </label>
                                    &nbsp;
                                </td>

                                <td>
                                    <input type="email"
                                        name="email"
                                        id="inputemail"
                                        value={createUser.email}
                                        className="form-control"
                                        required="required"
                                        onChange={textChange} />
                                </td>
                                <td style={{ textAlign: "left", color: "red" }}>&nbsp;*</td>
                            </tr>

                            <br />

                            <tr>
                                <td style={{ textAlign: "right" }}>
                                    <label for="inputmobile">Mobile :  </label>
                                    &nbsp;
                                </td>

                                <td>
                                    <input type="name"
                                        name="mobile"
                                        id="inputmobile"
                                        value={createUser.mobile}
                                        className="form-control"
                                        required="required"
                                        onChange={textChange} />
                                </td>
                                <td style={{ textAlign: "left", color: "red" }}>&nbsp;*</td>
                            </tr>

                            <br />


                            <tr>
                                <td style={{ textAlign: "right" }}>
                                    <label for="inputpasswd">Password :  </label>
                                    &nbsp;
                                </td>

                                <td>
                                    <input type="password"
                                        name="passwd"
                                        id="inputpasswd"
                                        value={createUser.passwd}
                                        className="form-control"
                                        required="required"
                                        onChange={textChange} />
                                </td>
                                <td style={{ textAlign: "left", color: "red" }}>&nbsp;*</td>
                            </tr>

                            <br />

                            <tr>
                                <td style={{ textAlign: "right" }}>
                                    <label for="inputconfirm_password" >Confirm Password :  </label>
                                    &nbsp;
                                </td>

                                <td>
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        id="inputconfirm_password"
                                        value={createUser.confirm_password}
                                        className="form-control"
                                        required="required"
                                        onChange={textChange} />
                                </td>
                                <td style={{ textAlign: "left", color: "red" }}>&nbsp;*</td>
                            </tr>

                            <br></br>

                            <tr>
                                <td></td>

                                <td style={{ textAlign: "center" }}>
                                    <button type="button" className="btn btn-primary" onClick={register}>Register</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-info" onClick={()=>{history.push('/login')}}>Login</button>
                                
                                </td>

                            </tr>

                        </tbody>
                    </table>

                    <div style={{ backgroundColor: "white", border: "white", color: "red" }} className="alert alert-danger">
                        <h3>{msg}</h3>
                    </div>

                </center>

            </div>
        </>



    );

}

export default Registration;