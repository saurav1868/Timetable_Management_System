import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { useState } from "react";
import Calendar from 'react-calendars'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "./TimeTable.css"


function Managetimetable() {

    const [academicYear, setAcademicYear] = useState("Year-I Sem-II");
    const [academicDetail, setAcademicDetail] = useState("Mechanical");
    const [startDate, setStartDate] = useState("1/06/2022");
    const [endDate, setEndDate] = useState("10/10/2022");
    const [opacity, setOpacity] = useState("1");
    const [display, setDisplay] = useState("none");
    const [lectureData, setLectureData] = useState([{ lectureAgenda: "", topicsCovered: "", tomLecture: "" }]);

    const history = useHistory();
    const showSubjectData = () => {
        setDisplay("block")
        setOpacity("0.2")
        setLectureData([{ lectureAgenda: "This is todays lecture agenda", topicsCovered: "These are todays Topics covered", tomLecture: "These topivs will be covered tommorow" }]);
    }

    return (
        <div className="timetable">

            <div className="item" style={{ paddingLeft: "200px" }}>
                {/* <b>Academic Year : {academicYear}</b>
                <br></br> <br></br>
                <b>Start Date: {startDate}</b> */}
            </div>

            <div className="item" style={{ fontSize: "20px", display: "flex", float: "left", marginLeft: "-250px" }}>
                <div>
                    <b>Academic Year : {academicYear}</b>
                    <br></br><br></br>
                    <b>Start Date: {startDate}</b>
                </div>
                <div style={{marginLeft:"350px"}}>
                    <b>Academic Details : {academicDetail}</b>
                    <br></br><br></br>
                    <b>End Date : {endDate}</b>
                </div>
                
            </div>

            <div className="item" style={{ justifySelf: "center", gridTemplateColumns: "300px 1fr", marginLeft: "-350px" }} >
                <CalendarComponent />
            </div>

            <div className="table-responsive item" style={{ gridColumnStart: "2", gridRowStart: "2", gridRowEnd: "4", marginLeft: "-360px", opacity: opacity }}>
                <table className="table table-bordered" style={{ height: "600px", border: "2px solid black" }}>
                    <thead >
                        <tr style={{ backgroundColor: "cornflowerblue", border: "2px solid black" }}>

                            <th style={{ textAlign: "center" }}>Class Time</th>
                            <th style={{ textAlign: "center" }}>Mon</th>
                            <th style={{ textAlign: "center" }}>Tue</th>
                            <th style={{ textAlign: "center" }}>Wed</th>
                            <th style={{ textAlign: "center" }}>Thur</th>
                            <th style={{ textAlign: "center" }}>Fri</th>
                            <th style={{ textAlign: "center" }}>Sat</th>
                            <th style={{ textAlign: "center" }}>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ textAlign: "center" }}>9-10</td>
                            <td style={{ textAlign: "center" }}><input className="button1" onClick={showSubjectData} type="button" value="SOM" /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD1" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="TOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="RAC" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD2" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="HMT" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="Mechatronics" onClick={showSubjectData} /></td>

                        </tr>

                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ textAlign: "center" }}>10-11</td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="RAC" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="SOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="HMT" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="Mechatronics" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD1" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD2" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="TOM" onClick={showSubjectData} /></td>

                        </tr>

                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ textAlign: "center" }}>11-12</td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="HMT" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD1" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="Mechatronics" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="SOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD2" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="TOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="RAC" onClick={showSubjectData} /></td>

                        </tr>

                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ textAlign: "center" }}>12-1</td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="HMT" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="TOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD2" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="RAC" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="SOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="Mechatronics" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD1" onClick={showSubjectData} /></td>

                        </tr>

                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ textAlign: "center" }}>1-2</td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD1" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="TOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="RAC" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD2" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="Mechatronics" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="SOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="HMT" onClick={showSubjectData} /></td>

                        </tr>

                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ textAlign: "center" }}>2-3</td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="TOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="Mechatronics" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD1" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="HMT" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="RAC" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD2" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="SOM" onClick={showSubjectData} /></td>

                        </tr>

                        <tr style={{ border: "2px solid black" }}>
                            <td style={{ textAlign: "center" }}>3-4</td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="HMT" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD1" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="RAC" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="TOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="SOM" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="Mechatronics" onClick={showSubjectData} /></td>
                            <td style={{ textAlign: "center" }}><input className="button1" type="button" value="MD2" onClick={showSubjectData} /></td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="table-responsive item" style={{ justifySelf: "center", gridTemplateColumns: "50px 1fr", paddingTop: "30px", marginLeft: "-350px" }}>
                <table className="table table-bordered" style={{ textAlign: "center", width: "500px" }}>
                    <thead >
                        <tr style={{ backgroundColor: "lightpink" }}>

                            <th style={{ textAlign: "center" }} >Sr No</th>
                            <th style={{ textAlign: "center" }} >Teacher</th>
                            <th style={{ textAlign: "center" }} >Subject</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Saurav</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Deepansu</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Rohan</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Prathamesh</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="popup" id="popup" style={{ display: display }}>
                <p style={{ textAlign: "center", fontSize: "25px", color: "midnightblue" }}>LECTURE DATA</p>
                <b style={{ textAlign: "center", fontSize: "15px", color: "blue" }}>Lecture Agenda : </b> <p>{lectureData[0].lectureAgenda}</p>
                <b style={{ textAlign: "center", fontSize: "15px", color: "blue" }}>Topics Covered : </b> <p>{lectureData[0].topicsCovered}</p>
                <b style={{ textAlign: "center", fontSize: "15px", color: "blue" }}>Next Lectures Topics : </b> <p>{lectureData[0].tomLecture}</p>

                <div class="rate">
                    <b>Lecture Rating :</b><br></br>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>

                </div>
                <br></br><br></br><br></br>
                <a onClick={() => { setDisplay("none"); setOpacity("1") }}>Close</a>

            </div>

        </div>

    );
}

export default Managetimetable;








