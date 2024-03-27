import React,{ useEffect, useState } from "react";
import User from "./Detail";
import Adding from "./Adding";
import Edit from "./Edit";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://65ed55ba0ddee626c9b17864.mockapi.io/users" ,{method: "GET"})
        .then((res) => res.json())
        .then((fetchedData) => setData(fetchedData));
    }, []);
    console.log(data);
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/user/adding">Add </Link>
          </li>
        
        </ul>
      </nav>
      <Routes>
        <Route path="/user" element={<User  data={data}/>} />
        <Route path="/user/adding" element={<Adding />} />
        <Route path="/user/edit:id" element={<Edit data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
