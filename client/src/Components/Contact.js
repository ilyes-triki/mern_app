import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import {
  deleteContact,
  getContact,
  toogleTrue,
} from "../redux/actions/Contacts";
import { Link } from "react-router-dom";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>{contact.name} </Card.Header>
          <Card.Meta>{contact.email} </Card.Meta>
          <Card.Description>Phone : {contact.phone}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link to={`/add/${contact._id}`}>
              <Button
                inverted
                color="green"
                onClick={() => {
                  {
                    dispatch(toogleTrue());
                    dispatch(getContact(contact._id));
                  }
                }}
              >
                Edit
              </Button>
            </Link>
            <Button
              inverted
              color="red"
              onClick={() => {
                dispatch(deleteContact(contact._id));
              }}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Contact;
