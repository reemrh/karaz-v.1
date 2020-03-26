import React from "react";
import { Link ,Redirect} from "react-router-dom";
function Home(props){
    return (
    <>
      <Link to="/admin">Admin</Link> <br/>
      <Link to="/settings">Settings</Link><br/>
      <Link to="/login">Login</Link><br/>
      <Link to="/dashboard">Dashboard</Link><br/>
      <Link to="/signup">Signup</Link><br/>
    </>
    );

}
export default  Home;