import React, {Component} from "react";
import { Layout } from "antd";
import Header from "./components/headerCustom";
import "./style/index.less";
class App extends Component{
    render(){
        return(
            <Layout>
                <Layout>
                    <h1>ddf</h1>
                    <Header />
                </Layout>
            </Layout>
        );
    }
}
export default App;
