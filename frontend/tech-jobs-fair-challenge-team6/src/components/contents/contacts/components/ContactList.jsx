import React, { useState } from "react";
import { Avatar, List } from "antd";
import EditContactForm from "../../../contact_form/EditContactForm";
import ViewContactModal2 from "../../../modals/ViewContactModal2";

export function ContactList({ contactsList, currentPage }) {
  const [viewContact, setViewContact] = useState("");
  const [editData, setEditData] = useState("");
  console.log(contactsList);

  const handleConfirm = () => {
    setEditData(undefined);
  };

  const handleCancel = () => {
    setEditData("");
  };

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
        dataSource={contactsList}
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
        <ViewContactModal2
          onClose={() => setViewContact("")}
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
