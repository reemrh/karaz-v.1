import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from '../context/Auth';
import Cookies from "universal-cookie";




function PrivateRoute({component: Component,...rest}) {
    const { authTokens } = useAuth();
    const cookie = new Cookies();
    return (
        <Route 
         {...rest}
         render= { props =>
         authTokens ?
         (<Component {...props} />)
         :
         ( <Redirect
            to={{ pathname: "/login" }}
          />)
        }
        />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    )
}
export default PrivateRoute;