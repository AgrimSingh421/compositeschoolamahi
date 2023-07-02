import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddAPost from "./components/AddAPost";
import Login from "./components/Login";
import Register from "./components/Register";
import Post from "./components/Post";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import FAQs from "./components/FAQs";

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="app">
      <Navbar user={user} />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addapost" element={<AddAPost user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path={`/posts/:postid`} element={<Post user={user} />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
