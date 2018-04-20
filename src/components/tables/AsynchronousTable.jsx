import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getPros } from '../../axios';//自定义异步请求axios管理
import BreadcrumbCustom from '../BreadcrumbCustom';//表格面包屑

//github提供的数据展示接口
const columns = [{
    title: '项目名',
    dataIndex: 'username',
    width: 100,
    render: (text, record) => <a href={record.url} target="_blank">{text}</a>
}, {
    title: '语言',
    dataIndex: 'lang',
    width: 80
}, {
    title: 'star',
    dataIndex: 'starCount',
    width: 80
}, {
    title: '描述',
    dataIndex: 'description',
    width: 200
}];

class AsynchronousTable extends React.Component {
    //表格自己状态的保存
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
        data: []
    };
    componentDidMount(){
        this.start();
    }
    //获取表格数据
    start = () => {
        // 拿后台数据的
        this.setState({loading: true});
        //表格数据的获取并重渲染表格
        getPros().then(res => {
            this.setState({
                data: [...res.data.map(val => {
                    val.key = val.id;
                    return val;
                })],
                loading: false
            })
        })
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="异步表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="异步表格--GitHub今日热门javascript项目" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Button type="primary" onClick={this.start}
                                            disabled={loading} loading={loading}
                                    >Reload</Button>
                                    <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
                                </div>
                                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AsynchronousTable;