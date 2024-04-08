import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, ROUTS } from "../../constants/constants";
import NewContactForm from "../contact_form/NewContactForm";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (e) => {
    console.log("EE is ", e);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleLogOut = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.isAuth);
    navigate(ROUTS.logIn);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="navbar-logo">TechSolutions </div>
      <div className="search-box">
        <Input
          value={searchQuery}
          style={{ width: 304 }}
          allowClear
          onChange={handleSearchChange}
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      <Button
        onClick={showModal}
        className="add-new-contact-button"
        type="primary"
      >
        Add new contact
      </Button>
      <Button
        style={{ marginLeft: "30px", color: " #f7f7f7" }}
        onClick={handleLogOut}
        className="add-new-contact-button"
        type="text"
      >
        Log out
      </Button>
      <NewContactForm
        open={isModalOpen}
        onConfirm={handleOk}
        onCancel={handleCancel}
      ></NewContactForm>
    </Header>
  );
};

export default Navbar;
