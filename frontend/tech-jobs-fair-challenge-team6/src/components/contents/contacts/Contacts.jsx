import { ContactList } from "./components/ContactList";
import { Flex, Cascader } from "antd";

const sortOptions = [
  {
    value: "name",
    label: "Sorty by name",
  },
  {
    value: "surname",
    label: "Sorty by surname",
  },
];
const onSortOptionChange = (value) => {
  console.log(value);
};

export function Contacts({ contactsData, handleFilterParam }) {
  return (
    <>
      <Flex justify="space-between" align="center">
        <label style={{ fontWeight: "bold", fontSize: "500" }}>
          {contactsData?.data.length} contacts
        </label>
        <Cascader
          options={sortOptions}
          onChange={onSortOptionChange}
          placeholder="Sort by"
        />
      </Flex>
      <ContactList
        contactsData={contactsData}
        handleFilterParam={handleFilterParam}
      ></ContactList>
    </>
  );
}
