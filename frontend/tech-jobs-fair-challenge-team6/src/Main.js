import React, { useEffect, useState } from "react";
import { Alert, Layout } from "antd";
import Navbar from "./components/header/Navbar";
import { Contacts } from "./components/contents/contacts/Contacts";
import Sidebar from "./components/sidebar/Sidebar";
import { getAllContacts } from "./api/contacts";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, QUERY_KEYS, ROUTS } from "./constants/constants";
const { Content } = Layout;

function Main() {
  const [filterParams, setFilterParams] = useState({ page: 1 });
  const isLoggedIn = localStorage.getItem(LOCAL_STORAGE_KEYS.isAuth);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.getAllContacts],
    queryFn: () => getAllContacts(filterParams),
  });

  const handleFilterParamsChange = (checkedValues, key) => {
    setFilterParams((prevState) => ({ ...prevState, [key]: checkedValues }));
  };
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate(ROUTS.logIn);
  }

  const handleFilterParam = (param) => {
    setFilterParams((prevState) => ({ ...prevState, ...param }));
  };

  useEffect(() => {
    refetch();
  }, [filterParams]);
  return (
    <>
      {isLoggedIn ? (
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
              {/* <Alert message="Success Tips" type="success" showIcon closable /> */}
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: "white",
                  borderRadius: "20px",
                  overflowY: "hidden",
                }}
              >
                <Contacts
                  contactsData={data}
                  handleFilterParam={handleFilterParam}
                ></Contacts>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Main;
