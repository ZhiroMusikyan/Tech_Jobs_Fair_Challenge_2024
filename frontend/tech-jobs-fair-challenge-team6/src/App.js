import React from "react";
import { Layout } from "antd";
import Navbar from "./header/Navbar";
import { Contacts } from "./components/contents/contacts/contacts";
import Sidebar from "./sidebar/Sidebar";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout
          style={{
            padding: "24px 24px",
            height: "90vh",
            overflow: "auto",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "white",
              borderRadius: "20px",
            }}
          >
            <Contacts></Contacts>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
