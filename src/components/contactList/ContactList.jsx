import React from 'react';
import styles from './contactList.module.css';

function ContactList(props) {
  const listContacts = props.contacts;
  const { onDeleteContact } = props;

  console.log('form ok', listContacts);

  return (
    <div>
      <ul className={styles.contactList}>
        {//listContacts &&
          listContacts.map(i => (
            <li className={styles.contactItem} key={i.id}>
              <div>
                {i.name}: {i.number}
              </div>
              <button className={styles.btnDeleteContact}onClick={() => onDeleteContact(i.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ContactList;
