import React, { useState } from "react";
import { Avatar, List } from "antd";
import EditContactForm from "../../../contact_form/EditContactForm";
import { UserToForm } from "../../../../utils/user_to_form";

const contactsList = [
  {
    id: 3,
    user_id: 1,
    profile_picture: "https://lorempixel.com/640/480/?63528",
    name: "Devante",
    surname: "Howell",
    email: "padberg.brando@example.com",
    number: "1-910-891-6761",
    social_media_url:
      "http://ullrich.org/voluptatem-similique-eius-temporibus-voluptas-voluptatibus-quia",
    access: "Admin",
    date_of_birth: "2000-07-17",
    type_id: "2690",
    note: "Dignissimos earum tempora sed enim laborum voluptatem iste.",
    created_at: "2024-04-05T15:23:07.000000Z",
    updated_at: "2024-04-05T15:23:07.000000Z",
  },
  {
    id: 4,
    user_id: 1,
    profile_picture: "https://lorempixel.com/640/480/?69117",
    name: "Yasmine",
    surname: "Lehner",
    email: "gbruen@example.com",
    number: "+1 (931) 207-7912",
    social_media_url:
      "http://oreilly.org/recusandae-ut-repellendus-vitae-totam.html",
    access: "General",
    date_of_birth: "1999-06-05",
    type_id: "93998",
    note: "Inventore accusantium sequi eos molestias.",
    created_at: "2024-04-05T15:23:07.000000Z",
    updated_at: "2024-04-05T15:23:07.000000Z",
  },
  {
    id: 5,
    user_id: 1,
    profile_picture: "https://lorempixel.com/640/480/?55308",
    name: "Kiera",
    surname: "McLaughlin",
    email: "monica63@example.net",
    number: "+13722539941",
    social_media_url:
      "http://www.stanton.com/quia-minus-pariatur-temporibus-aut-accusamus",
    access: "Admin",
    date_of_birth: "2004-06-10",
    type_id: "15400",
    note: "Est vero ut distinctio consequatur sapiente similique repellendus.",
    created_at: "2024-04-05T15:23:07.000000Z",
    updated_at: "2024-04-05T15:23:07.000000Z",
  },
  {
    id: 6,
    user_id: 1,
    profile_picture: "https://lorempixel.com/640/480/?93923",
    name: "Gerald",
    surname: "Hoppe",
    email: "koss.lelia@example.net",
    number: "1-421-684-6718",
    social_media_url: "http://www.kemmer.com/et-est-eos-neque-laborum-eius",
    access: "General",
    date_of_birth: "1988-07-11",
    type_id: "18786",
    note: "Accusamus itaque ad inventore.",
    created_at: "2024-04-05T15:23:07.000000Z",
    updated_at: "2024-04-05T15:23:07.000000Z",
  },
];

export function ContactList({ currentPage }) {
  const [viewContact, setViewContact] = useState(false);
  const [editData, setEditData] = useState(undefined);

  const handleConfirm = () => {
    setEditData(undefined);
  };

  const handleCancel = () => {
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
                onClick={() => setEditData(UserToForm(item))}
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
      <EditContactForm
        data={editData}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      ></EditContactForm>
    </>
  );
}
