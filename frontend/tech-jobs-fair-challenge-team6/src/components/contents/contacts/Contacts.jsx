import { LOCAL_STORAGE_KEYS } from "../../../constants/constants";
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

export function Contacts({ contactsData, handleOnSort, handleOnPageChange }) {
  const onSortOptionChange = (value) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.sort, value);
    handleOnSort({ sort: value });
  };
  return (
    <>
      <Flex justify="space-between" align="center">
        <label style={{ fontWeight: "bold", fontSize: "500" }}>
          {contactsData?.data.length} contacts
        </label>
        <Cascader
          allowClear={false}
          options={sortOptions}
          defaultValue={"name"}
          onChange={onSortOptionChange}
          placeholder="Sort by"
        />
      </Flex>
      <ContactList
        contactsData={contactsData}
        handleOnPageChange={handleOnPageChange}
      ></ContactList>
    </>
  );
}
