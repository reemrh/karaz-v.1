import React, { useState } from "react";
import { Link ,Redirect} from "react-router-dom";
import { css } from "emotion";
import { useAuth } from "../context/Auth";
import { useGoogleLogin } from 'react-use-googlelogin';
import axios from "axios";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

//imgs
import valid from "../img/valid.png";
import invalid from '../img/invalid.png';
import logoImg from "../img/logo.PNG";
import rightArrow from "../img/forward.png";
import invisible from '../img/eye.png';
import fb from '../img/fb.png';

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [emailIcon, setEmailIcon] = useState("");
  const [Error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const { setAuthTokens } = useAuth();

  let [EmptyEmail,setEmptyEmail]= useState("");
  let [EmptyPassword,setEmptyPassword]= useState("");

  const responseGoogle = (response) => {
    console.log(response);
  }

  function postLogin() {
    axios.post("https://authentcation.herokuapp.com/login ", {
      email: userEmail,
      password: password,
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);        
      } else {
        console.log(result);
      }
    }).catch(e => {
      console.log(e);
    });
  }

  const handleSubmit = event => {
    event.preventDefault();    
    if(userEmail == ''){
      setEmptyEmail("true");
    }
    if(password == ''){
      setEmptyPassword("true");
    }   
    if(userEmail !== '' && password !== ''){
      postLogin();
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

  if(isLoggedIn) return <Redirect to="/admin" />;

  return (
    <div className="container">

      <div className="left-side"></div>
      <form onSubmit={handleSubmit} className="form">
        <div className="logo-div">
          <img className="arrow" src={rightArrow} />
          <img className="logo" src={logoImg} />
        </div>
        <center>
          <h1 className="title">تسجيل دخول</h1>
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
          
            {(Error == "invalidEmail") ? <span>أدخل بريد إلكتروني صحيح </span> : (Error == "invalidEmail") ? '' : ''}
        </label>

        <label>
          كلمة السر
          <div className="passwordLabel">
            <input
              type={inputType}
              onChange={e => {setPassword(e.target.value); setEmptyPassword(false);}}
              value={password}
              className="password"/>
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
          {(EmptyPassword)?<span>لايمكن ترك الحقل فارغ</span>:''}
        </label>  

        <div className="already">
          <div>
            <Link to="/">نسيت كلمة السر؟  </Link>
          </div>
        </div>  

        <button type="submit">تسجيل دخول</button>
        <div className="already">
          <div>
           ليس لديك حساب؟<Link to="/signup">إنشاء حساب </Link>
          </div>
          <p>تحتاج مساعدة؟</p>
        </div>
        <center>
          <h5 className={css`color:#8E8E93`}>أو باستخدام</h5>
          <div className="another-method">
            <FacebookLogin
              appId="1092305107816601"
              callback={responseFacebook}
              fields="name,email,picture"
              render={renderProps => (
                <img onClick={renderProps.onClick} src={fb} />
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

export default Login;