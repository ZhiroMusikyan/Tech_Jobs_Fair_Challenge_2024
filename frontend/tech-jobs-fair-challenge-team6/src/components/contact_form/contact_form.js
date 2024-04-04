import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="1">+1</Option>
      <Option value="39">+39</Option>
    </Select>
  </Form.Item>
);

const ContactForm = ({ open, onConfirm, onCancel }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    form.resetFields();
    console.log("Success:", values);
    onConfirm();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "This field is required.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Surname"
            name="surname"
            rules={[
              {
                required: true,
                message: "This field is required.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "This field is required.",
              },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: "email", message: "Please enter a valid email address." },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Social:" name="social">
            <Input />
          </Form.Item>

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
