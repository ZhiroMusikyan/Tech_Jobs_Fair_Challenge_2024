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

export function Contacts({ currentPage, contactsList }) {
  console.log("contactsList", contactsList?.lenght);
  return (
    <>
      <Flex justify="space-between" align="center">
        <label style={{ fontWeight: "bold", fontSize: "500" }}>
          {contactsList?.length} contacts
        </label>
        <Cascader
          options={sortOptions}
          onChange={onSortOptionChange}
          placeholder="Sort by"
        />
      </Flex>
      <ContactList
        contactsList={contactsList}
        currentPage={currentPage}
      ></ContactList>
    </>
  );
}
