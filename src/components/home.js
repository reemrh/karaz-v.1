import React from "react";
import { Link } from "react-router-dom";
function Home(props){
    return (
    <>
      <Link to="/admin">Admin</Link> <br></br>
      <Link to="/settings">Settings</Link><br></br>
      <Link to="/login">Login</Link><br></br>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/signup">Signup</Link><br></br>
    </>
    );

}
export default  Home;