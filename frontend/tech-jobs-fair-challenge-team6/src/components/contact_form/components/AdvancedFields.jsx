import { DatePicker, Form, Input } from "antd";

const { TextArea } = Input;

const AdvancedFields = () => {
  return (
    <>
      <Form.Item label="Social:" name="social_media_url">
        <Input />
      </Form.Item>

      <Form.Item label="Birth date:" name="birthDate">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Note:" name="note">
        <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
      </Form.Item>
    </>
  );
};

export default AdvancedFields;
