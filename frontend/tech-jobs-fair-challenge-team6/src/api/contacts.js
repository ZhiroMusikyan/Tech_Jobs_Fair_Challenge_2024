import { CONTACTS_PATH, LOCAL_STORAGE_KEYS } from "../constants/constants";
import axios from "./axios";
import {
  convertContactDataIntoBackEndType,
  formatContactData,
} from "./contact.utils";

const getAllContacts = async (filterParams) => {
  let url = CONTACTS_PATH;
  if (filterParams) {
    const queryParams = new URLSearchParams(filterParams);
    url += `?${queryParams.toString()}`;
  }
  const response = await axios.get(url);
  const contacts = response.data.contacts;
  const formatedData = formatContactData(contacts);

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
  try {
    const response = await axios.put(
      `${CONTACTS_PATH}/${contactId}`,
      contactData
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
