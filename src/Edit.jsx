import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./App";
import axios from "axios";

function Edit({ data, get }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const datas = data[id];
  console.log(datas);

  // Destructure properties from datas object
  const { name, phone, username, email, company, address, website, zipcode } =
    datas;

  // Define state variables to hold updated values
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedCompany, setUpdatedCompany] = useState(company.name);
  const [updatedAddress, setUpdatedAddress] = useState(address.city);
  const [updatedWebsite, setUpdatedWebsite] = useState(website);
  const [updatedZipcode, setUpdatedZipcode] = useState(zipcode);

  return (
    <div className="add">
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedPhone}
        onChange={(e) => setUpdatedPhone(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedUsername}
        onChange={(e) => setUpdatedUsername(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedEmail}
        onChange={(e) => setUpdatedEmail(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedCompany}
        onChange={(e) => setUpdatedCompany(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedAddress}
        onChange={(e) => setUpdatedAddress(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedWebsite}
        onChange={(e) => setUpdatedWebsite(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "90%" }}
        variant="outlined"
        value={updatedZipcode}
        onChange={(e) => setUpdatedZipcode(e.target.value)}
      />
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          const update = {
            updatedName,
            updatedPhone,
            updatedUsername,
            updatedEmail,
            updatedCompany,
            updatedAddress,
            updatedWebsite,
            updatedZipcode,
          };
          console.log(update);
          try {
            axios.put(
              `${API}`,
              JSON.stringify(update),
              {
                headers: {
                  "content-Type": "application/json",
                },
              },
              get(),
              navigate("/")
            );
          } catch (error) {
            console.error(error);
          }
        }}
        style={{ width: "90%" }}
        className="btn btn-success"
      >
        Save
      </button>
    </div>
  );
}

export default Edit;
