import React, { useState } from "react";
import { Avatar, List } from "antd";
import ViewContactModal from "../../../modals/ViewContactModal";

export function ContactList({ contactsList, currentPage }) {
  const [viewContact, setViewContact] = useState("");
  console.log(contactsList);
  return (
    <>
      <List
        pagination={{ position: "bottom", align: "end" }}
        dataSource={contactsList}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => setViewContact(item)}
            actions={[
              <a key="list-loadmore-call" href={`tel:+33 230 123 1230`}>
                Delete
              </a>,
              <a key="list-loadmore-edit" href="...">
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
    </>
  );
}
