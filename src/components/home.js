import React from "react";
import { Link ,Redirect} from "react-router-dom";
function Home(props){
    return (
    <>
      <Link to="/admin">Admin</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/signup">Signup</Link>
    </>
    );

}
export default  Home;