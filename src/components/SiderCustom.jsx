import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
import { Link } from 'react-router';

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: ''
    };
    componentDidMount() {
        this.setMenuOpen(this.props);
    }
   componentWillReceiveProps(nextProps){
       //注意这里不要使用this.props，它此时是一个旧数据，而nextProps表示了一个新的，变化了的数据。
       console.log("componentWillReceiveProps--",nextProps);
       this.onCollapse(nextProps.collapsed);
       this.setMenuOpen(nextProps);
    }
    onCollapse = (collapsed) => {
        console.log(collapsed,"使用生命周期componentWillReceiveProps钩子来改变state");
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline'
        });
    };
    setMenuOpen = props =>{
        const {path}=props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);

    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1]
        })
    };
    render() {
        return (

            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.state.collapsed}
                style={{overflowY:"auto"}}
            >
                <div className="logo" />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={[this.state.openKey]}
                    onOpenChange={this.openMenu}
                >
                    <Menu.Item key="/app/dashboard/index">
                        <Link to={'/app/dashboard/index'}><Icon type="mobile" /><span className="nav-text">首页</span></Link>
                    </Menu.Item>
                    <SubMenu
                        key="/app/chart"
                        title={<span><Icon type="area-chart" /><span className="nav-text">图表</span></span>}
                    >
                        <Menu.Item key="/app/chart/echarts"><Link to={'/app/chart/echarts'}>echarts</Link></Menu.Item>
                        <Menu.Item key="/app/chart/recharts"><Link to={'/app/chart/recharts'}>recharts</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="page"
                        title={<span><Icon type="switcher" /><span className="nav-text">页面</span></span>}
                    >
                        <Menu.Item key="/login"><Link to={'/login'}>登录</Link>登录</Menu.Item>
                        <Menu.Item key="/404"><Link to={'/404'}>404</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/ui"
                        title={<span><Icon type="scan" /><span className="nav-text">UI</span></span>}
                    >

                        <Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>按钮</Link></Menu.Item>
                        <Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>图标</Link></Menu.Item>
                        <Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>加载中</Link></Menu.Item>
                        <Menu.Item key="/app/ui/banners"><Link to={'/app/ui/banners'}>轮播图</Link></Menu.Item>
                        <Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>对话框</Link></Menu.Item>
                        <Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>通知提醒框</Link></Menu.Item>
                        <Menu.Item key="/app/ui/tabs"><Link to={'/app/ui/tabs'}>标签页</Link></Menu.Item>
                        <Menu.Item key="/app/ui/wysiwyg"><Link to={'/app/ui/wysiwyg'}>富文本</Link></Menu.Item>
                        <Menu.Item key="/app/ui/drags"><Link to={'/app/ui/drags'}>拖拽</Link></Menu.Item>
                        <Menu.Item key="/app/ui/gallery"><Link to={'/app/ui/gallery'}>画廊</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/table"
                        title={<span><Icon type="copy" /><span className="nav-text">表格</span></span>}
                    >

                        <Menu.Item key="/app/table/basicTable"><Link to={'/app/table/basicTable'}>基础表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/advancedTable"><Link to={'/app/table/advancedTable'}>高级表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/asynchronousTable"><Link to={'/app/table/asynchronousTable'}>异步表格</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/form"
                        title={<span><Icon type="edit" /><span className="nav-text">表单</span></span>}
                    >
                        {/*key 可以随意写，但必须要唯一*/}
                        <Menu.Item key="/app/basicForm"><Link to={'/app/form/basicForm'}>基础表单</Link></Menu.Item>
                        <Menu.Item key="/app/drapform"><Link to={'/app/form/drapform'}>复杂表单</Link></Menu.Item>

                    </SubMenu>
                    <SubMenu
                        key="/app/animation"
                        title={<span><Icon type="edit" /><span className="nav-text">动画</span></span>}
                    >
                        {/*key 可以随意写，但必须要唯一*/}
                        <Menu.Item key="/app/basicanimations"><Link to={'/app/animation/basicanimations'}>基础动画</Link></Menu.Item>
                        <Menu.Item key="/app/exampleanimations"><Link to={'/app/animation/exampleanimations'}>动画案例</Link></Menu.Item>

                    </SubMenu>
                </Menu>
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}

export default SiderCustom;