import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, toogleFalse } from "../redux/actions/Contacts";
import { Button, Loader } from "semantic-ui-react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsList.contacts);
  const loading = useSelector((state) => state.contactsList.loadingContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div>
      <Link to="/add">
        <Button
          inverted
          color="blue"
          onClick={() => {
            dispatch(toogleFalse());
          }}
        >
          Add Contact
        </Button>
      </Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {loading ? (
          <Loader size="mini">Loading</Loader>
        ) : (
          contacts.map((el) => <Contact key={el._id} contact={el} />)
        )}
      </div>
    </div>
  );
};

export default ContactList;
