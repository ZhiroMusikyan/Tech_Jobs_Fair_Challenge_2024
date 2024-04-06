import dayjs from "dayjs";

export function UserToForm(userData) {
  return {
    name: userData.name,
    surname: userData.surname,
    email: userData.email,
    number: userData.number,
    type: userData.type_id,
    social_media_url: userData.social_media_url,
    birthDate: dayjs(userData.date_of_birth),
    note: userData.note,
  };
}
