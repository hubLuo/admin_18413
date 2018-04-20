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
//登入页
import Login from './components/pages/Login';
//UI组件
import Icons from './components/ui/Icons';
import Buttons from './components/ui/Buttons';
import Spins from './components/ui/Spins';
import Banners from './components/ui/banners';//轮播图
import Modals from './components/ui/Modals';
import Notifications from './components/ui/Notifications';

//图表组件
import Echarts from './components/charts/Echarts';
import Recharts from './components/charts/Recharts';
//404页面
import NotFound from './components/pages/NotFound';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path={"/"} component={Page}>
            {/*该方式为react3*/}
            <IndexRedirect to="/app/form/DrapForm" />
            {/* app应用链接*/}
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
                <Route path={'ui'}>
                    <Route path={'icons'} component={Icons} />
                    <Route path={'buttons'} component={Buttons} />
                    <Route path={'spins'} component={Spins} />
                    <Route path={'banners'} component={Banners} />
                    <Route path={'modals'} component={Modals} />
                    <Route path={'notifications'} component={Notifications} />
                </Route>
                <Route path={'chart'}>
                    <Route path={'echarts'} component={Echarts} />
                    <Route path={'recharts'} component={Recharts} />
                </Route>
            </Route>
        </Route>
        {/* 登入页链接*/}
        <Route path={'login'} components={Login} />
        {/* 404链接*/}
        <Route path={'404'} component={NotFound} />
    </Router>,
    document.getElementById('root')
);

