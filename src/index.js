import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import{Router,Route,hashHistory,IndexRedirect} from "react-router";
import BasicForm from "./components/forms/BasicForm";
import Page from "./components/page";
import DrapForm from "./components/forms/DrapForm.jsx";
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path={"/"} component={Page}>
            {/*该方式为react3*/}
            <IndexRedirect to="/app/form/DrapForm" />
            <Route path={"app"} component={App}>
                <Route path={"form"}>{/*仅仅充当填充路径的作用*/}
                    <Route path={"basicForm"} component={BasicForm} />
                    <Route path={"drapform"} component={DrapForm} />
                </Route>

            </Route>
        </Route>
        {/* <App /> */}
    </Router>,
    document.getElementById('root')
);

