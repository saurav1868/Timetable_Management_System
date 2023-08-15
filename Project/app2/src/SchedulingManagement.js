import '../node_modules/bootstrap/dist/css/bootstrap.css';
function SchedulingManagement()
{
    return (<>
    <div className='container' style={{padding: 10}}>
       
        <div className='jumbotron' style={{backgroundColor:'yellowgreen' , padding: 5 }}><center><h1>SchedulingManagement</h1></center></div>
    <div className='table-responsive'>
        <center>
       <table className='table table-bordered' border={1} style={{width: 350}}>
         <tr>
         <td>
        Department: 
    </td>
    <td>
    <input type='text'/><br/>
    </td>
    </tr>
    <tr>
    <td>
        Academic Year: 
    </td>
    <td>
    <input type='number'/><br/>
    </td>
    </tr>
    <tr>
    <td>
        Semester: 
    </td>
    <td>
    <input type='text'/><br/>
    </td>
    </tr>
    <tr>
    <td>
        Start Date: 
    </td>
    <td>
    <input type='date'/><br/>
    </td>
    </tr>
    <tr>
    <td>
        End Date: 
    </td>
    <td>
    <input type='date'/><br/>
    </td>
    </tr>
    <tr>
    <td>
        Time Slots: 
    </td>
    <td>
    <input type='text'/><br/>
    </td>
    </tr>
    <tr>
    <td>
        Break Time: 
    </td>
    <td>
    <input type='text'/><br/>
    </td>
    </tr>
    <tr>
    <td>
    No of subjects per day: 
    </td>
    <td>
    <input type='number'/><br/>
    </td>
    </tr>
    <tr>
    <td>
     College timing In: 
          </td>
          <td>
    <input type='number'/><br/>
    </td>
    </tr>
    <tr>
    <td>
    College timing Out: 
    </td>
    <td>
    <input type='number'/><br/>
    </td>
    </tr>
    </table> 
    <table className='table-bordered'border={1}>
        <tr>
            <td colSpan={5}>
            <center> <h4>Create Schedule(Using Algorithm)</h4></center>
            </td>
        </tr>
        
        <tr style={{backgroundColor:'aqua'}}>
            <td> 
              <center> Dept.Name</center> 
            </td>
            <td>
              <center>  Year</center>
            </td>
            <td>
                <center>Semester</center>
            </td>
            <td>
                <center>Start Date</center>
            </td>
            <td>
              <center>  End Date</center>
            </td>
        </tr>
      
        <tr>
            <td>
            <input type='text' />
            </td>
            <td>
                <input type='year'/>
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
        </tr>
        <tr>
            <td>
            <input type='text' />
            </td>
            <td>
                <input type='year'/>
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
        </tr>
    </table>
        </center>
        
    </div>

    </div>  
    

    </>)
}
export default SchedulingManagement;