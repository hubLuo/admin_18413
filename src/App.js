import React, {Component} from "react";
import { Layout } from "antd";
import Header from "./components/headerCustom";
import Sider from "./components/SiderCustom";
import "./style/index.less";

const {Content,Footer}=Layout;

class App extends Component{
    //主题切换状态
    state = {
        collapsed: false,
    };
    //主题切换方法
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render(){
        return(
            <Layout>
                {/*要实现点击导航跳转，需要进行路径的传递*/}
                <Sider path={this.props.location.pathname} collapsed={this.state.collapsed} />
                <Layout>
                    <Header toggle={this.toggle} />
                    <Content style={{ margin: '0 16px',overflow:"initial" }}>
                        {/*子组件渲染*/}
                        {this.props.children}
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
