import axios from "./axios";

const getAllContacts = async (filterParams) => {
  let url;
  if (filterParams) {
    const queryParams = new URLSearchParams(filterParams);
    url += `?${queryParams.toString()}`;
  }
  //  contacts params seted for test,
  const response = await axios.get("/comments");
  return response.data;
};

const createContact = async (contactData) => {
  try {
    const response = await axios.post("/contacts", contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateContact = async (contactId, contactData) => {
  try {
    const response = await axios.put(`/contacts/${contactId}`, contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getAllContacts, createContact, updateContact, deleteContact };
