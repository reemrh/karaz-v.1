import React,{ useState }  from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

//css
import './App.css';

//components
import Home from './components/home';
import Admin from './components/admin';
import Croper from './components/Croper';
import PrivateRoute from './components/privateRoute';
import  {AuthContext} from './context/Auth';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Signup from './pages/signup';
import Verification from './pages/verification';
import Settings from './pages/settings';


function App(props) {
  const [authTokens, setAuthTokens] = useState();
  const [emailToVerify, setEmailToVerify] = useState(); 
   
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
    
  }

  return (
    <AuthContext.Provider value={{ emailToVerify, setEmailToVerify,authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div className="App">              
          <Route path="/img-crop" component={Croper}/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/verify" component={Verification} />
          <PrivateRoute path="/admin" component={Admin}/>
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/settings" component={Settings}/>
        </div>
      </Router>   
    </AuthContext.Provider>
  );
}

export default App;
