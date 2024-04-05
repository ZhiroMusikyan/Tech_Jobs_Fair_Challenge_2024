import { DatePicker, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AdvancedFields = () => {
  return (
    <>
      <Form.Item label="Profile picture:" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <button
            style={{
              border: 0,
              background: "none",
            }}
            type="button"
          >
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </button>
        </Upload>
      </Form.Item>

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
