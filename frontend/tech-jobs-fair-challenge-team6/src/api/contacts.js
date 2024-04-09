import { CONTACTS_PATH, LOCAL_STORAGE_KEYS } from "../constants/constants";
import axios from "./axios";
import {
  TRES,
  convertContactDataIntoBackEndType,
  formatContactData,
  t,
} from "./contact.utils";

const getAllContacts = async (filterParams) => {
  let url = CONTACTS_PATH;
  if (filterParams) {
    // const newObj = {
    //   ...filterParams,
    // };
    // if (filterParams.department) {
    //   newObj.department_ids = JSON.stringify(filterParams.department);
    //   delete newObj.department;
    // }

    const queryParams = new URLSearchParams(filterParams);
    url += `?${queryParams.toString()}`;
  }
  const response = await axios.get(url);
  const contacts = response.data.contacts;
  const tr = TRES;
  // debugger;
  const formatedData = formatContactData(tr);

  return formatedData;
};

const createContact = async (contactData) => {
  const convertedContactData = convertContactDataIntoBackEndType(contactData);
  const logedInUserId = localStorage.getItem(LOCAL_STORAGE_KEYS.authUserData);
  try {
    const response = await axios.post(CONTACTS_PATH, {
      user_id: logedInUserId ? logedInUserId.id : 1,
      ...convertedContactData,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateContact = async ({ contactId, contactData }) => {
  const convertedContactData = convertContactDataIntoBackEndType(contactData);

  try {
    const response = await axios.put(
      `${CONTACTS_PATH}/${contactId}`,
      convertedContactData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(`${CONTACTS_PATH}/${contactId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getAllContacts, createContact, updateContact, deleteContact };
