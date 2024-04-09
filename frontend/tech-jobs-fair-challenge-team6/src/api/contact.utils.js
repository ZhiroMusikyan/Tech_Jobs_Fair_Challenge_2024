export const formatContactData = (contactsData) => {
  const formatedData = {
    data: convertContactDataIntoFrontEndType(contactsData.data),
    curentPage: contactsData.current_page,
    total: contactsData.total,
  };
  return formatedData;
};

const convertContactDataIntoFrontEndType = (data) => {
  const convertedContactData = data.map((item) => {
    return {
      access: item.access,
      dateOfBirth: item.date_of_birth,
      email: item.email,
      id: item.id,
      name: item.name,
      note: item.note,
      number: item.number,
      profileImg: item.profile_picture,
      socialMediaURL: item.social_media_url,
      surname: item.surname,
      type: item.type_id,
      userId: item.user_id,
      department: item.department_id,
    };
  });
  return convertedContactData;
};

export const convertContactDataIntoBackEndType = (data) => {
  const convertedContactData = {
    access: data.access,
    date_of_birth: data.dateOfBirth,
    email: data.email,
    id: data.id,
    name: data.name,
    note: data.note,
    number: data.number,
    profile_picture: data.profileImg,
    social_media_url: data.socialMediaURL,
    surname: data.surname,
    type_id: data.type,
    department_id: data.department,
  };
  return convertedContactData;
};
