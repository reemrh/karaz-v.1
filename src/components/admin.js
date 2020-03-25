import React from "react";
import { Link ,Redirect} from "react-router-dom";
import { Button } from "../components/authForm";
import { useAuth } from "../context/Auth";


function Admin(props) {
  const { setAuthTokens } = useAuth();
   

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Admin Page</div>
      <Link to="/home">Home</Link>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;