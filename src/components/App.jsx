import ContactForm from "./ContactForm/ContactForm";
import s from "./App.module.css";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import defaultContacts from "../contacts.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const storage = localStorage.getItem("contacts");
    if (storage) {
      return JSON.parse(storage);
    }
    return defaultContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    setContacts([...contacts, values]);
    actions.resetForm();
  };
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const result = contacts.filter(({ name }) =>
    name.toLowerCase().match(inputValue.toLowerCase())
  );

  const onDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox handleChange={handleChange} inputValue={inputValue} />
      <ContactList numberPhone={result} onDelete={onDelete} />
    </>
  );
}

export default App;
