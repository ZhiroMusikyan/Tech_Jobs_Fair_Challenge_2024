import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import Navbar from './header/Navbar';
const {  Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function App() {
  
  return (
    <Layout>
   <Navbar/>
    <Layout>
      <Sider
        width={200}
        style={{
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
          minHeight: '90vh'
        }}
      >
        <Content
          style={{
            padding: 24,
            margin: 0,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>

  );
}

export default App;
