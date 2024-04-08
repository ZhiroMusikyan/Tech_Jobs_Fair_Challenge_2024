import React, { useState } from "react";
import { Avatar, List } from "antd";
import ViewContactModal from "../../../modals/ViewContactModal";
import EditContactForm from "../../../contact_form/EditContactForm";

export function ContactList({ contactsData, handleFilterParam }) {
  const [viewContact, setViewContact] = useState("");
  const [editData, setEditData] = useState("");
  const handleConfirm = () => {
    setEditData(undefined);
  };

  const handleCancel = () => {
    setEditData("");
  };
  const handlePageChange = (value) => {
    handleFilterParam({ page: value });
  };
  console.log(contactsData);
  return (
    <div
      style={{
        height: "90%",
        marginTop: "20px",
        paddingRight: "5px",
        overflowY: "scroll",
      }}
    >
      <List
        pagination={{
          position: "bottom",
          align: "end",
          onChange: handlePageChange,
          pageSize: 10,
          total: contactsData?.total,
        }}
        dataSource={contactsData?.data}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => setViewContact(item)}
            actions={[
              <a key="list-delete" href="#delete">
                Delete
              </a>,
              <a
                key="list-edit"
                href="#edit"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditData(item);
                }}
              >
                Edit
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={item.name + " " + item.surname}
              description={item.number}
            />
          </List.Item>
        )}
      />
      {viewContact && (
        <ViewContactModal
          onClose={() => setViewContact("")}
          customFooter={null}
          contactData={viewContact}
        />
      )}
      {editData && (
        <EditContactForm
          data={editData}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
