import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { login } from "./features/userSlice";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { loginUser } from "./features/userSlice";
import { useNavigate } from "react-router";

const App = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const { name, email, password } = user || ''
    console.log(name);

    if (user) {
      dispatch(loginUser({ name, email, password }));
    }
  }, [user]);

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
