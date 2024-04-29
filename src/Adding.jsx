import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./App";
import axios from "axios";

function Adding({ get }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [zipcode, setZipcode] = useState("");
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
        onChange={(e) => setWebsite(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="Website"
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
        label="Email"
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
        label="Company"
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
        label="Address"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        onChange={(e) => setZipcode(e.target.value)}
        style={{
          width: "100%",
          padding: "0px 30px 0px 10px",
          "margin-top": "10px",
        }}
        label="Zipcode"
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
            website,
            email,
            company,
            address,
            zipcode
          };
          console.log(newuser);
          try {
            axios
              .post(`${API}`, JSON.stringify(newuser), {
                headers: {
                  "content-Type": "application/json",
                },
              })
              .then(() => {
                get(), navigate("/");
              });
          } catch (error) {
            console.error(error);
          }
        }}
        style={{
          height: "40px",
          width: "97%",
          padding: "0px 30px 0px 10px",
          "margin-left": "10px",
        }}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
}

export default Adding;
