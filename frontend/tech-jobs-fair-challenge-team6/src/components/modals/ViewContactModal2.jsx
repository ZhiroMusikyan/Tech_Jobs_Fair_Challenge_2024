import { Modal, Card, Avatar, Flex, Row, Col } from "antd";

import { Meta } from "antd/es/list/Item";

const ViewContactModal2 = ({ contactData, onClose }) => {
  const contact = {
    fullName: `${contactData.name} ${contactData.surname}`,
    number: contactData.number,
    email: contactData.email,
    social: contactData.social,
    birth: contactData.date_of_birth,
  };

  return (
    <Modal
      titleLineHeight={1.8}
      width={450}
      closablep
      open
      onCancel={onClose}
      footer={null}
    >
      <Card className="contact-info" style={{ border: "none" }}>
        <Meta
          avatar={
            <Avatar
              style={{ width: "100px", height: "100px" }}
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            />
          }
          title={contact.fullName}
          description={
            <table>
              <tr>
                <td>
                  <Flex vertical>
                    <label>Phone number:</label>
                    <span>{contact.number ?? "-"}</span>
                  </Flex>
                </td>
                <td>
                  <Flex vertical>
                    <label>Email</label>
                    <span>{contact.email ?? "-"}</span>
                  </Flex>
                </td>
              </tr>
              <tr>
                <td>
                  <Flex vertical>
                    <label>Social:</label>
                    <span>{contact.social ?? "-"}</span>
                  </Flex>
                </td>
                <td>
                  <Flex vertical>
                    <label>Birth</label>
                    <span>{contact.birth ?? "-"}</span>
                  </Flex>
                </td>
              </tr>
            </table>
          }
        />
      </Card>
    </Modal>
  );
};

export default ViewContactModal2;
