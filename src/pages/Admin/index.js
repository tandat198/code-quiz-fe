import React from "react";
import { Layout, Menu } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import QuestionTable from "../../components/QuestionTable";

const { Header, Content, Sider } = Layout;

class AdminPage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className='logo' />
                    <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
                        <Menu.Item key='1' icon={<QuestionOutlined />}>
                            Option 1
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className='site-layout'>
                    <Header className='site-layout-background' style={{ padding: 0 }} />
                    <Content style={{ margin: "0 16px" }}>
                        <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
                            <QuestionTable />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default AdminPage;
