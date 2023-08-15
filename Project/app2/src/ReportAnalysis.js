import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { ResponsiveContainer,BarChart,Bar,XAxis,YAxis, Tooltip } from 'recharts';
import Footer from './Footer';

const Array=[{
    xaxis:"week1",
    ratings: 5,
},
{
xaxis:"week2",
ratings: 4,
},
{
    xaxis:"week3",
    ratings: 3,
},
{
    xaxis:"week4",
    ratings: 8,
    },
    {
        xaxis:"week5",
        ratings: 9,
    },


];

function ReportAnalysis()
{
    return (
        <>
        <div className='container'>
        <div className='jumotron'style={{padding: 10 , backgroundColor: 'yellowgreen'}} >
          <center><h1>Report and Analysis</h1>  </center>
        </div>
        <hr></hr>
        <h3 style={{textDecorationLine:'underline'}}>Leaves Approval</h3>
        <div style={{marginTop:20}} className='table-responsive'>
            <table className='table table-bordered'> 
             <tr>
                <td>
                    Teacher
                </td>
                <td>
                    Department
                </td>
                <td>
                    Content
                </td>
                <td>
                    From
                </td>
                <td>
                    To
                </td>
                <td>
                    Approved
                </td>

             </tr>
             <tr>
            <td>
            <input type='text' />
            </td>
            <td>
                <input type='text'/>
            </td>
            <td>
                <input type='text'/>
            </td>
            <td>
                <input type='date'/>
            </td>
            <td>
                <input type='date'/>
            </td>
            <td>
                <input type='Approved'/>
            </td>
        </tr>
            </table>
        </div>
        <h3 style={{textDecorationLine:'underline', marginTop: -10}}>Feedback</h3>
        <select style={{width:100 , marginTop:15}}>
            <option>dept</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Computer Science</option>
            <option>ENTC</option>
        </select>
        
        <select style={{width:100,marginLeft:100}}>
            <option>Teachers</option>
            <option>Deepanshu</option>
            <option>Prathmesh</option>
            <option>Rohan</option>
            <option>Saurav</option>
        </select>
        <br></br>
        <br>
        </br>
        <ResponsiveContainer width="50%" aspect={3}>
<BarChart data={Array} width={400} height={400}> 
    <XAxis dataKey="xaxis"></XAxis>
    <YAxis></YAxis>
    <Tooltip></Tooltip>
    <Bar dataKey="ratings" barSize={50}  fill="#8883d8"></Bar>
</BarChart>
        </ResponsiveContainer>  

        </div>  

        </>
    )
}
export default ReportAnalysis;