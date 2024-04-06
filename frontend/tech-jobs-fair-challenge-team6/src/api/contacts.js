import axios from "./axios";

const getAllContacts = async (filterParams) => {
  let url;
  if (filterParams) {
    const queryParams = new URLSearchParams(filterParams);
    url += `?${queryParams.toString()}`;
  }
  //  contacts params seted for test,
  const response = await axios.get("/contacts");
  return response.data.contacts;
};

const createContact = async (contactData) => {
  try {
    const d = contactData;
    d.user_id = 1;
    debugger;
    console.log("createContact", d);
    const response = await axios.post(
      "/contacts",
      JSON.stringify({
        profile_picture: "asdd",
        name: "asd",
        surname: "qwer",
        email: "qwerled@mail.ru",
        number: "1233753231",
        user_id: 1,
        social_media_url: "Qwer",
        date_of_birth: "1982-09-01",
        type_id: "qwer",
        note: "qwrt",
      })
    );
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
