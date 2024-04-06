import { Form, Input, Select } from "antd";
import prefixSelector from "./PrefixSelector";
import { useState } from "react";
const { Option } = Select;

const BasicFields = () => {
  const [isInternal, setIsInternal] = useState(false);

  const handleTypeChange = (value) => {
    setIsInternal(value === "internal");
  };

  return (
    <>
      <Form.Item
        label="Name:"
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
        label="Surname:"
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
        label="Phone number:"
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
        name="type"
        label="Type:"
        rules={[
          {
            required: true,
            message: "This field is required.",
          },
        ]}
      >
        <Select placeholder="Select a type" onChange={handleTypeChange}>
          <Option value="internal">Internal</Option>
          <Option value="external">External</Option>
          <Option value="partner">Partner</Option>
        </Select>
      </Form.Item>

      {isInternal ? (
        <Form.Item
          name="department"
          label="Department:"
          rules={[
            {
              required: true,
              message: "This field is required.",
            },
          ]}
        >
          <Select placeholder="Select a department">
            <Option value="it">IT</Option>
            <Option value="hr">HR</Option>
          </Select>
        </Form.Item>
      ) : (
        <Form.Item name="" label="Department:">
          <Select placeholder="-" disabled={true}></Select>
        </Form.Item>
      )}
    </>
  );
};

export default BasicFields;
