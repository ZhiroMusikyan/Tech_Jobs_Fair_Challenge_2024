import React, { useState } from "react";
import { Button, Form, Modal, Tabs, message } from "antd";
import BasicFields from "./components/basic_fields";
import AdvancedFields from "./components/advanced_fields";
const ContactForm = ({ open, onConfirm, onCancel }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const showSuccessMsg = () => {
    messageApi.open({
      type: "success",
      content: "The contact was added successfully!",
    });
  };

  const showErrorMsg = () => {
    messageApi.open({
      type: "error",
      content: "Ups! Something went wrong, try to check the values entered.",
    });
  };

  const onFinish = (values) => {
    form.resetFields();
    console.log("Success:", values);
    showSuccessMsg();
    onConfirm();
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
    showErrorMsg();
  };

  const items = [
    {
      key: "1",
      label: "Basic",
      children: <BasicFields></BasicFields>,
    },
    {
      key: "2",
      label: "Advanced",
      children: <AdvancedFields></AdvancedFields>,
    },
  ];

  return (
    <>
      {contextHolder}
      <Modal title="New contact" open={open} onCancel={onCancel} footer={null}>
        <Form
          name="basic"
          layout="vertical"
          form={form}
          initialValues={{ prefix: "1" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Tabs defaultActiveKey="1" items={items} />
          <Form.Item style={{ display: "flex", justifyContent: "end" }}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ContactForm;
