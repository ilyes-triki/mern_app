import { combineReducers } from "redux";
import { contactsReducer } from "../reducers/ContactsReducer";
import { editReducer } from "../reducers/EditReducer";
export const rootReducer = combineReducers({
  contactsList: contactsReducer,
  edit: editReducer,
});
