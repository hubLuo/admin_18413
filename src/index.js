import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import{Router,Route,hashHistory,IndexRedirect} from "react-router";
//子页渲染
import Page from "./components/page";
//表单
import BasicForm from "./components/forms/BasicForm";
import DrapForm from "./components/forms/DrapForm.jsx";
//表格
import BasicTable from "./components/tables/BasicTables.jsx";
import AdvancedTable from "./components/tables/AdvancedTables.jsx";
import AsynchronousTable from './components/tables/AsynchronousTable';
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
                <Route path={"table"}>{/*仅仅充当填充路径的作用*/}
                    <Route path={"basicTable"} component={BasicTable} />
                    <Route path={"advancedTable"} component={AdvancedTable} />
                    <Route path={'asynchronousTable'} components={AsynchronousTable} />
                </Route>
            </Route>
        </Route>
        {/* <App /> */}
    </Router>,
    document.getElementById('root')
);

