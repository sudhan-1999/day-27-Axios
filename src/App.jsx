import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData));
    console.log(data);
  }, []);
  return (
    <div className="row">
      {data.map((item, index) => {
        return (
          <div  className="col-lg-4 mb-4" key={index}>
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
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

