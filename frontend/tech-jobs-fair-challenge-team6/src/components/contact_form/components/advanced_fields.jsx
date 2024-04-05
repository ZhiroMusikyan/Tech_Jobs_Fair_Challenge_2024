import { DatePicker, Form, Input } from "antd";

const AdvancedFields = () => {
  return (
    <>
      <Form.Item
        label="Email:"
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

      <Form.Item label="Birth date:" name="birthDate">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
    </>
  );
};

export default AdvancedFields;
