import React, { Component } from "react";
import Phonebook from "./components/phonebook/Phonebook";
import ContactList from "./components/contactList/ContactList";
import withTheme from "./hoc/withTheme";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contactStorage = localStorage.getItem("contacts");
    if (contactStorage) {
      this.setState({ contacts: JSON.parse(contactStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  filterByName = () => {
  };

  deleteContact = (id) => {
  };

  render() {
    
    const {
      themeConfig: { fontColor, bodybg },
    } = this.props;
    const { filter } = this.state;
    return (
      <div style={{ color: fontColor, background: bodybg }}>
        <button
          type="submit"
          style={{ marginLeft: "30px", marginTop: "30px" }}
          onClick={this.props.toggleTheme}
        >
          Change theme
        </button>
        <Phonebook
          name={this.state.name}
          number={this.state.number}
        />

        <ContactList
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default withTheme(App);
