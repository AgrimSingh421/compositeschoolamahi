import React from "react";
import "./components.css";
import { NavLink } from "react-router-dom";
import img1 from "../img/banner3.jpeg";
import img2 from "../img/banner2.png";
import img3 from "../img/banner4.jpg";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  const logout = () => {
    const auth = getAuth();
    if (window.confirm("Are you sure you want to logout?") === true) {
      signOut(auth)
        .then(() => {
          alert("You are logged out now");
        })
        .catch((error) => {
          alert(`An error occurred: ${error.message}`);
        });
    } else {
      alert("Logout cancelled");
    }
  };
  return (
    <nav className="navbar">
      <ul className="images">
        <div className="first">
          <img src={img1} alt="Image 1" className="img1" />
        </div>
        <div className="second">
          <img src={img2} alt="Image 2" className="img2" />
        </div>
        <div className="third">
          <img src={img3} alt="Image 3" className="img3" />
        </div>
      </ul>
      <ul className="links">
        <li className="school-name">
          <NavLink to="/">Composite School Lamahi</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/addapost">Add A Post</NavLink>
            </li>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
