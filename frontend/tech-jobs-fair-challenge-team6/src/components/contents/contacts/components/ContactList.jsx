import React, { useState } from "react";
import { Avatar, List } from "antd";
import EditContactForm from "../../../contact_form/EditContactForm";
import ViewContactModal2 from "../../../modals/ViewContactModal2";
import { Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../constants/constants";
import ConfirationModal from "../../../modals/ConfirationModal";
import { deleteContact } from "../../../../api/contacts";

export function ContactList({ contactsData, handleFilterParam }) {
  const [viewContact, setViewContact] = useState("");
  const [editData, setEditData] = useState("");
  const [deleteSelectedContact, setDeleteSelectedContact] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAllContacts] });
    },
  });
  const handleConfirm = () => {
    setEditData(undefined);
  };

  const handleCancel = () => {
    setEditData("");
  };
  const handlePageChange = (value) => {
    handleFilterParam({ page: value });
  };
  const handleDelete = () => {
    mutate(deleteSelectedContact.id);
    setDeleteSelectedContact("");
  };
  const handleCancelDelete = () => {
    setDeleteSelectedContact("");
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
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditData(item);
                }}
                type="link"
                block
              >
                Edit
              </Button>,
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteSelectedContact(item);
                }}
                danger
                type="text"
                block
              >
                Delete
              </Button>,
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
      {deleteSelectedContact && (
        <ConfirationModal
          handleOk={handleDelete}
          handleCancel={handleCancelDelete}
          title={`Do you Want to delete ${deleteContact.name} contact?`}
          okText="Yes"
          cancelText="No"
        />
      )}
    </div>
  );
}
