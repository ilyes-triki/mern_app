import Axios from "axios";
import {
  GET_CONTACTS_FAILED,
  GET_CONTACTS_STARTED,
  GET_CONTACTS_SUCCESS,
  TOOGLE_TRUE,
  TOOGLE_FALSE,
  GET_CONTACT,
  POST_CONTACT,
} from "../constant/Constants";
export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_STARTED });
  try {
    let result = await Axios.get("/api/contact/");
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAILED, payload: error });
  }
};
export const deleteContact = (id) => (dispatch) => {
  Axios.delete(`/api/contact/${id}`)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
export const toogleTrue = () => {
  return {
    type: TOOGLE_TRUE,
  };
};
export const toogleFalse = () => {
  return {
    type: TOOGLE_FALSE,
  };
};
export const getContact = (id) => (dispatch) => {
  Axios.get(`/api/contact/${id}`)
    .then((res) => dispatch({ type: GET_CONTACT, payload: res.data.response }))
    .catch((err) => console.log(err));
};
export const postContact = (user) => (dispatch) => {
  Axios.post("/api/contact", user)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
export const editContact = (id, user) => (dispatch) => {
  Axios.put(`/api/contact/${id}`, user)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
