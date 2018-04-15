import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import{Router,Route,hashHistory,IndexRedirect} from "react-router";
import BasicForm from "./components/forms/BasicForm"
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path={"app"} component={App}>
            <Route path={"form"} component={BasicForm}></Route>
        </Route>
        {/* <App /> */}
    </Router>,
    document.getElementById('root')
);

