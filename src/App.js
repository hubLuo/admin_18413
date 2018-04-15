import React, {Component} from "react";
import { Layout } from "antd";
import Header from "./components/headerCustom";
import Sider from "./components/SiderCustom";
import "./style/index.less";

const {Content,Footer}=Layout;

class App extends Component{
    render(){
        return(
            <Layout>
                <Sider />
                <Layout>
                    <Header />
                    <Content style={{ margin: '0 16px',overflow:"initial" }}>
                     Hello
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default App;
