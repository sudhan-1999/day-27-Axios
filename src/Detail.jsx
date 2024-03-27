import React  from "react";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate  } from "react-router-dom";

function User({data}) {
   
    const navigate = useNavigate();
    return (
      <div className="row">
        {data.map((item, id) => {
          return (
            <div  className="col-lg-4 mb-4" key={id}>
            <div className="card" style={{width: "18rem"}} >
              <div className="card-body">
                <p>Name: {item.name}</p>
                <p>Phone: {item.phone}</p>
                <p>Username: {item.username}</p>
                <p>Website: {item.website}</p>
                <p>Email: {item.email}</p>
                <p>Company: {item.company.name}</p>
                <p>
                  Address: {item.address.street},<br></br>
                  {item.address.city}
                </p>
                <p>zipcode: {item.address.zipcode}</p>
              </div>
              <span >
                <IconButton className="span1"
                aria-label="EditIcon"
                color="primary" onClick={()=>navigate("/user/edit:id")}><EditIcon/></IconButton>
                
              <IconButton  className="span2"
                aria-label="DeleteIcon"
                color="secondary" onClick={() => {
                  confirm("confirm delete");
                  navigate("/user");
                }}><DeleteIcon/></IconButton>
              </span>
            </div>
            </div>
          );
        })}
      </div>
    );
}

export default User





