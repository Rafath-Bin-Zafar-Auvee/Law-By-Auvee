import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import logo from "../../images/logo.png"
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    
    <div>
    
      <nav className="header">
        <img src={logo} alt="" />
        <div className= "active-link">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/services">Services</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          {user ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )}
          <CustomLink to="/checkout">Checkout</CustomLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
