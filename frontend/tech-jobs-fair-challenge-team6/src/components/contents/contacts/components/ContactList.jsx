import React, { useState } from "react";
import { Avatar, List } from "antd";
import ViewContactModal from "../../../modals/ViewContactModal";
import EditContactForm from "../../../contact_form/EditContactForm";
import { UserToForm } from "../../../../utils/user_to_form";

export function ContactList({ contactsList, currentPage }) {
  const [viewContact, setViewContact] = useState("");
  const [editData, setEditData] = useState(undefined);
  console.log(contactsList);

  const handleConfirm = () => {
    setEditData(undefined);
  };

  const handleCancel = () => {
    UserToForm({});
    setEditData(undefined);
  };

  return (
    <>
      <List
        pagination={{ position: "bottom", align: "end" }}
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
                  setEditData(UserToForm(item));
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
      <EditContactForm
        data={editData}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      ></EditContactForm>
    </>
  );
}
