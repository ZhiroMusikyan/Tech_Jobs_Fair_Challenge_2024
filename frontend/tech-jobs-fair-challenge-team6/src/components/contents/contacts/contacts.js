import { ContactList } from "./components/contact_list";
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

export function Contacts() {
  return (
    <>
      <Flex justify="space-between" align="center">
        <label style={{ fontWeight: "bold", fontSize: "500" }}>
          4 contacts
        </label>
        <Cascader
          options={sortOptions}
          onChange={onSortOptionChange}
          placeholder="Sort by"
        />
      </Flex>
      <ContactList></ContactList>
    </>
  );
}
