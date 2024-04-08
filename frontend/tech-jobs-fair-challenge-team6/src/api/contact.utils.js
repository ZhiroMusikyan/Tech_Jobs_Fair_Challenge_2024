export const formatContactData = (contactsData) => {
  const formatedData = {
    data: contactsData.data,
    curentPage: contactsData.current_page,
    totalPage: Math.round(contactsData.total / contactsData.per_page),
  };
  return formatedData;
};
