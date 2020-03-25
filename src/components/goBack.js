import React from 'react';
import { withRouter } from 'react-router-dom';
import arrow from "../img/forward.png";

const GoBack = ({ history }) => <img className="arrow" src={arrow} onClick={() => history.goBack()} />;

export default withRouter(GoBack)