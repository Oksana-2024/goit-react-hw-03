import { IoPerson } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <div className={s.contactContainer}>
        <div className={s.box}>
          <IoPerson size={24} /> <p className={s.text}>{name}</p>
        </div>
        <div className={s.box}>
          <MdPhone size={24} /> <p>{number}</p>
        </div>
      </div>
      <button onClick={onDelete} className={s.buttonDel} type="button">
        Delete
      </button>
    </>
  );
};
export default Contact;
