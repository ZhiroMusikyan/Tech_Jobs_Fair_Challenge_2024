import React, { useState } from "react";
import { Alert, Layout } from "antd";
import Navbar from "./components/header/Navbar";
import { Contacts } from "./components/contents/contacts/contacts";
import Sidebar from "./components/sidebar/Sidebar";
import { getAllContacts } from "./api/contacts";
import { useQuery } from "@tanstack/react-query";
const { Content } = Layout;

function App() {
  const [filterParams, setFilterParams] = useState({});

  const { isLoading, error, data } = useQuery({
    queryKey: ["getContactsList"],
    queryFn: () => getAllContacts(filterParams),
  });

  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("data", data);

  const handleFilterParamsChange = (checkedValues, key) => {
    setFilterParams((prevState) => ({ ...prevState, [key]: checkedValues }));
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Navbar />
      <Layout>
        <Sidebar handleFilterParamsChange={handleFilterParamsChange} />
        <Layout
          style={{
            padding: "24px 24px",
            overflow: "auto",
          }}
        >
          <Alert message="Success Tips" type="success" showIcon closable />
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
