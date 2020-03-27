import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { css } from "emotion";
import { useAuth } from "../context/Auth";
import axios from "axios";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
//imgs
import logoImg from "../img/logo.PNG";
import rightArrow from "../img/forward.png";
import valid from "../img/valid.png";
import invalid from '../img/invalid.png';
import invisible from '../img/eye.png';
import fb from '../img/fb.png';
 

function Signup() {
  const [Error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [emailIcon, setEmailIcon] = useState("");
  const [location, setLocation] = useState("غزة");
  const [isAccepted, setIsAccepted] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { setEmailToVerify } = useAuth();
  let [EmptyEmail,setEmptyEmail]= useState("");
  let [EmptyPassword,setEmptyPassword]= useState("");
  let [EmptyAccepted,setEmptyAccepted]= useState("");
  let msg = '';
   
  const responseGoogle = (response) => {
    console.log(response);
  }


  function postSignup() {
    axios
      .post("https://karaz-1.herokuapp.com/signup", {
        email: userEmail,
        password: password,
        city:'gaza'
      })
      .then(result => {
        if (result.status === 200) {
          console.log("sign up success and email verification code has been sent");
          msg = 'sign up success and email verification code has been sent';
          setIsSignUp(true);
          setEmailToVerify(userEmail);

        }
      })    
      .catch(e => {
        console.log('error is' + e);
        if (e.status === 400) {
          console.log("email is not valid");
          msg = 'email is not valid';
        }

        if (e.status === 409) {
          console.log("user is already signed up");
          msg = "user is already signed up";

        }
        if (e.status === 401) {
          console.log("password is required and must be 8 character, contains numbers and letters");
          msg = "password is required and must be 8 character, contains numbers and letters";
        } 
      
      });
  }
  const responseFacebook = (response) => {
    console.log(response);       
    axios.post("https://authentcation.herokuapp.com/facebooklogin", {
      userData: response,
    }).then(result => {
      if (result.status === 200) {
        
        console.log(result);
      } else {
        console.log("error");
      }
    }).catch(e => {
      console.log(e);
    });
  }

  function validateStructurepass(e) {
    setEmptyPassword(false);
     setPassword(e.target.value);
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password.match(passw)){ 
        setError("validPassword");
    }else{ 
      setError("invalidPassword");
    }  
   }

  const handleSubmit = event => {
    event.preventDefault();
    if(userEmail == ''){
      setEmptyEmail("true");
    }
    if(password == ''){
      setEmptyPassword("true");
    }
    if(isAccepted == false){
      setEmptyAccepted(true);
    }
    if(userEmail !== '' && password !== '' && isAccepted ==true){
      postSignup();
    }
  };
  
  const handleChange = (email) => {
    setEmptyEmail(false);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setUserEmail(email);
    if (re.test(email)) {
      setEmailIcon(valid);
      setError("validEmail");
    }
    else {
      // invalid email, maybe show an error to the user.
      setError("invalidEmail");
      setEmailIcon(invalid);
    }
  }

  const handlePasswordType = () => {
    (inputType == "password") ? setInputType("text") : setInputType("password");
  }
  if (isSignUp) {
    return (<Redirect to="/verify" />);
  }
  return (
    <div className="container">
      <div className="left-side">
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="logo-div">
          <img className="arrow" src={rightArrow} />
          <img className="logo" src={logoImg} />
        </div>
        <center>
          <h1 className="title">إنشاء حساب</h1>
        </center>
        <label>
          البريد الإلكتروني أو رقم الجوال
          <input
            type="email"
            value={userEmail}
            placeholder="example@email.com"
            onChange={email => handleChange(email.target.value)}
            className={css`
              background: url(${emailIcon}) no-repeat scroll 10px 10px;
              background-color: #EFEFF4;
              background-size:2.5vh;
            `}
          />
          {(EmptyEmail)?<span>لايمكن ترك الحقل فارغ</span>:''}
          
          {(Error == "invalidEmail") ? <span>أدخل بريد إلكتروني صحيح </span> : (userEmail == " ") ? 'يجب ادخال الايميل' : ''}
        </label>
        <label>
          كلمة السر
          <div className="passwordLabel">
            <input
              type={inputType}
              onChange={e => validateStructurepass(e)}
              value={password}
              className="password"

            />
            <span className={css`
              background: url(${invisible}) no-repeat scroll 9px 10px;
              background-color: #EFEFF4;
              background-size:2.3vh;
              width:10%;
              height:95%;
              margin:2px 0px;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
            `}
              onClick={handlePasswordType}
            ></span>

          </div>
          {(Error == "invalidPassword") ? <span>كلمة السر يجب أن تحتوي على حروف كبيرة وصغيرة وارقام وتكون أكثر من 8 </span> :(Error == "validPassword")? '': ""}
          {(EmptyPassword)?<span>لايمكن ترك الحقل فارغ</span>:''}
        </label>
        <label>
          العنوان
          <select
            selected={location}
            onChange={e => setLocation(e)}
          >
            <option>غزة</option>
            <option>الوسطى</option>
            <option>خانيونس</option>
            <option>رفح</option>
          </select>
        </label>
        <label className="checkbox">
          <input type="checkbox" onChange={(e) =>{setIsAccepted(!isAccepted);setEmptyAccepted(false);}} defaultChecked={isAccepted}/>
          أوافق على <a href=""> الشروط وسياسة الخصوصية </a>

        </label>
      {(EmptyAccepted)?<span className="Warning">يجب الموافقة على الشروط وسياسة الخصوصية </span>:''}



        <button onClick={handleSubmit}>إنشاء حساب</button>
        <div className="already">
          <div>
            لديك حساب؟<Link to="/login">تسجيل الدخول  </Link>
          </div>
          <p>تحتاج مساعدة؟</p>
        </div>
         <span className="Warning">{msg+'hi'}</span>
        <center>
          <h5 className={css`color:#8E8E93`}>أو باستخدام</h5>
          <div className="another-method">
          <FacebookLogin
              appId="1092305107816601"
              callback={responseFacebook}
              fields="name,email,picture"
              render={renderProps => (
                <img onClick={renderProps.onClick} src={fb}/>
              )}
            />
            <GoogleLogin
              clientId="910884210573-fgimm7qcpgaoos0l9d73vkq6pb2lfjac.apps.googleusercontent.com"
              buttonText=""
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="google"
            />
          </div>
        </center>
      </form>
    </div>
  );
}

export default Signup;
