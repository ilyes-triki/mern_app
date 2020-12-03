import {
  GET_CONTACTS_FAILED,
  GET_CONTACTS_STARTED,
  GET_CONTACTS_SUCCESS,
  GET_CONTACT,
} from "../constant/Constants";
const initialState = {
  contacts: [],
  loadingContacts: false,
  errors: null,
  user: {},
};
export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_STARTED:
      return { ...state, loadingContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, loadingContacts: false };
    case GET_CONTACTS_FAILED:
      return { ...state, loadingContacts: false, errors: payload };
    case GET_CONTACT:
      return { ...state, user: payload };

    default:
      return state;
  }
};
