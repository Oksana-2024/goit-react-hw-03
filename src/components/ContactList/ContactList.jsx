import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"

const ContactList = ({numberPhone, onDelete}) => {
  
  return (
    <ul className={s.contactsList}>
      {numberPhone.map(({ id, ...numberPhone }) => (
        <li className={s.contactItem} key={id}>
          <Contact number={numberPhone.number} name={numberPhone.name} onDelete={()=> onDelete(id)}/>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
