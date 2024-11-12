import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapText}>
        <p className={s.titleName}>Rosa</p>
        <p className={s.phone}>459-12-56</p>
      </div>
      <button type="button" className={s.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
