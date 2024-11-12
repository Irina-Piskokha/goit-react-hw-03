import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ initialContacts }) => {
  return (
    <ul className={s.list}>
      {initialContacts.map((item) => {
        return (
          <li key={item.id} className={s.item}>
            <Contact />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
