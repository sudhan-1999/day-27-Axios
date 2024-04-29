import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { API } from "./App";
import axios from "axios";

function User({ data, get }) {
  const navigate = useNavigate();
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${API}/${itemId}`);
      get();
      navigate("/");
      console.log(itemId);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div className="row">
      {data.map((item) => {
        return (
          <div className="col-lg-4 mb-4" key={item.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p>Name: {item.name}</p>
                <p>Phone: {item.phone}</p>
                <p>Username: {item.username}</p>
                <p>Website: {item.website}</p>
                <p>Email: {item.email}</p>
                <p>Company: {item.company.name}</p>
                <p>Address: {item.address.city}</p>
                <p>Zipcode: {item.address.zipcode}</p>
              </div>
          <span>
                <IconButton
                  className="span1"
                  aria-label="EditIcon"
                  color="primary"
                  onClick={() => navigate("edit//" + item.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  className="span2"
                  aria-label="DeleteIcon"
                  color="secondary"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default User;
