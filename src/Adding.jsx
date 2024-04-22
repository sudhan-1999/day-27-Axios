import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./App";
function Adding({ get }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  console.log(name, phone, Username, email, address, website, company);
  return (
    <div className="add">
      <TextField
        id="outlined-basic"
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="Name"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        onChange={(e) => setPhone(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="phone"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="Username"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="email"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        onChange={(e) => setAddress(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="address"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        onChange={(e) => setWebsite(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="website"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        onChange={(e) => setCompany(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="company"
        variant="outlined"
      />
      <br></br>
      <br></br>
      <button
        type="button"
        onClick={() => {
          const newuser = {
            name,
            phone,
            Username,
            email,
            address,
            website,
            company,
          };
          console.log(newuser);
          fetch(`${API}`, {
            method: "POST",
            body: JSON.stringify(newuser),
            headers: {
              "content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => get(), navigate("/"));
        }}
        style={{height:"40px", width: "97%", padding: "0px 30px 0px 10px" , "margin-left": "10px",}}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
}

export default Adding;
