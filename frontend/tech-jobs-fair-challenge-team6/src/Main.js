import React, { useState } from "react";
import { Alert, Layout } from "antd";
import Navbar from "./components/header/Navbar";
import { Contacts } from "./components/contents/contacts/Contacts";
import Sidebar from "./components/sidebar/Sidebar";
import { getAllContacts } from "./api/contacts";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTS } from "./constants/constants";
const { Content } = Layout;

function Main() {
  const [filterParams, setFilterParams] = useState({});
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { isLoading, error, data } = useQuery({
    queryKey: ["getContactsList"],
    queryFn: () => getAllContacts(filterParams),
  });

  //   console.log("isLoading", isLoading);
  //   console.log("error", error);
  // console.log("data", data);

  const handleFilterParamsChange = (checkedValues, key) => {
    setFilterParams((prevState) => ({ ...prevState, [key]: checkedValues }));
  };
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate(ROUTS.logIn);
  }

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
                }}
              >
                <Contacts
                  currentPage={data?.current_page}
                  contactsList={data?.data}
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
