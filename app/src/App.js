import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import Users from "./components/users.component";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="create-user">Create User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="users">Users List</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
              <Route path="/" element={<Users />} />
              <Route path="create-user" element={<CreateUser />} />
              <Route path="users" element={<Users />} />
            </Routes>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;