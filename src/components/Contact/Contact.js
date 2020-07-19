import React from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contactsAction";
import styles from "./Contact.module.css";

const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    deleteContact: () => dispatch(contactsAction.deleteContact(id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactItem);

