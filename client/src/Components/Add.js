import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { editContact, postContact } from "../redux/actions/Contacts";
const Add = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({ name: "", email: "", phone: "" });
  const contact = useSelector((state) => state.contactsList.user);
  const edit = useSelector((state) => state.edit.edit);
  useEffect(() => {
    edit ? setuser(contact) : setuser({ name: "", email: "", phone: "" });
  }, [contact, edit]);
  const handlePostContact = () => {
    if (!edit) {
      dispatch(postContact(user));
    } else {
      dispatch(editContact(contact._id, user));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Link exact to="/">
        <Button inverted color="blue">
          Home
        </Button>
      </Link>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            value={user.name}
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            value={user.email}
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            value={user.phone}
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/">
          <Button
            inverted
            color="blue"
            type="submit"
            onClick={handlePostContact}
          >
            {edit ? "submit changes" : "submit user"}{" "}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Add;
