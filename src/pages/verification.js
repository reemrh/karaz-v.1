import React, { useState } from 'react';
import axios from 'axios';
import logoImg from "../img/logo.PNG";
import GoBack from "../components/goBack";
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from "../context/Auth";



function Verification(props) {

  const [password, setPassword] = useState("");
  const [emptyPassword, setEmptyPassword] = useState("");
  const { emailToVerify } = useAuth();
  const isVerified = false;

  function postVerify() {
    axios
      .post("https://authentcation.herokuapp.com/verify", {
        code: password,
        email: emailToVerify,
      })
      .then(result => {
        if (result.status === 200) {
          console.log("Successfully signed up");
          isVerified = true;
        } else {
          console.log(result);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (password == '') {
      setEmptyPassword(true);
    } else {

      postVerify();
      console.log("done");
    }
  };

  if(isVerified) return <Redirect to="/login" />;
  return (
    <div className="container verification">
      <div className="left-side"></div>
      <form onSubmit={handleSubmit} className="form">
        <div className="logo-div">
          <GoBack/>
        </div>
        <center>
          <h1 className="title">تأكيد الايميل</h1>
        </center>
        <label>
          {emailToVerify} ادخل رمز التأكيد
            <input
            className='confirmpass'
            maxLength="4"
            placeholder="___    ___    ___    ___"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value); setEmptyPassword(false);
            }}
          />
        {(emptyPassword) ? <span className="Warning">لايمكن ترك الحقل فارغ</span> : ''}

         </label>
        <button type="submit">تم</button>
        <center>
          <span className="backTo">
            عودة الى
             
          <Link to="/login">  تسجيل الدخول</Link>
          </span>
        </center>
      </form>
    </div>
  )
}

export default Verification;