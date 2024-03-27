import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

function Edit() {
    const navigate = useNavigate();
  return (
    <div className='add'>
        <TextField   id="outlined-basic"  style={{"width":"100%"}} label="id" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" style={{"width":"100%"}} label="Name" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" style={{"width":"100%"}} label="phone" variant="outlined" /><br></br>
            <TextField  id="outlined-basic"  style={{"width":"100%"}} label="Username" variant="outlined" /><br></br>
            <TextField  id="outlined-basic"  style={{"width":"100%"}} label="email" variant="outlined" /><br></br>
            <TextField  id="outlined-basic"  style={{"width":"100%"}} label="address" variant="outlined" /><br></br>
            <TextField  id="outlined-basic"  style={{"width":"100%"}} label="website" variant="outlined" /><br></br>
            <TextField  id="outlined-basic"  style={{"width":"100%"}} label="company" variant="outlined" /><br></br>
            <br></br>
            <button type="button" onClick={()=>navigate("/user")} style={{"width":"100%"}} className="btn btn-success">Save</button>
    </div>
  )
}

export default Edit