export const formatContactData = (contactsData) => {
  const formatedData = {
    data: contactsData.data,
    curentPage: contactsData.current_page,
    total: contactsData.total,
  };
  return formatedData;
};
