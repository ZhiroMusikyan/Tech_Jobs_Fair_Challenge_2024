import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import ContactForm from "../components/contact_form/contact_form";
import "./navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
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
      <ContactForm
        open={isModalOpen}
        onConfirm={handleOk}
        onCancel={handleCancel}
      ></ContactForm>
    </Header>
  );
};

export default Navbar;
