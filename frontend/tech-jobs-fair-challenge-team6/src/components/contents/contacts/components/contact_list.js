import React from "react";
import { Avatar, List } from "antd";

const data = [
  {
    title: "Name Surname",
  },
  {
    title: "Name Surname",
  },
  {
    title: "Name Surname",
  },
  {
    title: "Name Surname",
  },
];

export function ContactList() {
  return (
    <List
      pagination={{ position: "bottom", align: "end" }}
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          actions={[
            <a key="list-loadmore-call" href={`tel:+33 230 123 1230`}>
              Call
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
            title={<a href="...">{item.title}</a>}
            description="+33 230 123 1230"
          />
        </List.Item>
      )}
    />
  );
}
