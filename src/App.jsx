
import React, { useEffect, useState } from "react";
import User from "./Detail";
import Adding from "./Adding";
import Edit from "./Edit";
import { Routes, Route, Link } from "react-router-dom";

export const API = "https://65ed55ba0ddee626c9b17864.mockapi.io/users";

function App() {
  const [data, setData] = useState([]);

  const get = () => {
    fetch(API, { method: "GET" })
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData));
  };

  useEffect(() => {
    get();
  }, []);

  console.log(data);

  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">User</Link>
          </li>
          <li>
            <Link to="/user/adding">Add </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<User data={data} setData={setData} get={get}/>} />
        <Route path="/user/adding" element={<Adding  get={get}/>} />
        <Route path="edit/:id" element={<Edit data={data} get={get}/>} />
      </Routes>
    </div>
  );
}

export default App;

