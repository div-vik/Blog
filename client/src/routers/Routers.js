import React from "react";
import { Route, Routes } from "react-router-dom";
import Single from "../components/single/Single";
import Write from "../components/write/Write";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Settings from "../pages/settings/Settings";

const Routers = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path= "/about" element={<About />} /> */}
      {/* <Route path= "/contact" element={<Contact />} /> */}
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/username/:userId" />
    </Routes>
  );
};

export default Routers;
