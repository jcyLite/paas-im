import React, { useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import Style from './index.less';
import { MenuOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
import { useHistory } from 'react-router-dom';
const { Option } = Select;
export default function(props: any) {
  const { children } = props;
  let history = useHistory();

  return (
    <Layout className={Style.wrapper}>
      <Sider trigger={null} collapsible>
        <div className="logo">
          CSM
          <div>客户成功平台</div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[history.location.pathname]}
        >
          <Menu.Item
            key="/im"
            onClick={() => {
              history.push('/im');
            }}
          >
            <span>即时聊天</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>统计分析</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item
            key="/customManager"
            onClick={() => {
              history.push('/customManager');
            }}
          >
            <span>客户管理</span>
          </Menu.Item>
          <Menu.Item key="5">
            <span>数据管理</span>
          </Menu.Item>
          <Menu.Item key="6">
            <span>问题看板</span>
          </Menu.Item>
          <Menu.Item key="7">
            <span>设置</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div className="header-left">
            <MenuOutlined />
            <Select defaultValue="0" style={{ width: 250 }} bordered={false}>
              <Option value="0">121212</Option>
              <Option value="1">公司2</Option>
              <Option value="2">公司3</Option>
            </Select>
            {/* <Select defaultValue="0" style={{ width: 150 }} bordered={false}>
                            <Option value="0">所有负责人</Option>
                            <Option value="1">负责人1</Option>
                            <Option value="2">负责人2</Option>
                        </Select> */}
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 800,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
