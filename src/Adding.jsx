
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


function Adding() {
   
        const navigate = useNavigate();

    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [Username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [website,setWebsite]=useState("")
    const [company,setCompany]=useState("")
    console.log(name,id,phone,Username,email,address,website,company)
    return (
        <div className='add'>
            <TextField   id="outlined-basic" onChange={(e)=>setId(e.target.value)} style={{"width":"100%"}} label="id" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" onChange={(e)=>setName(e.target.value)} style={{"width":"100%"}} label="Name" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" onChange={(e)=>setPhone(e.target.value)} style={{"width":"100%"}} label="phone" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" onChange={(e)=>setUsername(e.target.value)} style={{"width":"100%"}} label="Username" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" onChange={(e)=>setEmail(e.target.value)} style={{"width":"100%"}} label="email" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" onChange={(e)=>setAddress(e.target.value)} style={{"width":"100%"}} label="address" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" onChange={(e)=>setWebsite(e.target.value)} style={{"width":"100%"}} label="website" variant="outlined" /><br></br>
            <TextField  id="outlined-basic" onChange={(e)=>setCompany(e.target.value)} style={{"width":"100%"}} label="company" variant="outlined" /><br></br>
            <br></br>
            <button type="button" onClick={()=>navigate("/user")} style={{"width":"100%"}} className="btn btn-primary">Add</button>
        </div>
    );
}

export default Adding;
