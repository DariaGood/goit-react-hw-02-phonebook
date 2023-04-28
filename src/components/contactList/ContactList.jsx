import React from 'react';

function ContactList(props) {
  const listContacts = props.contacts;
  const {onDeleteContact} = props;
  
  console.log('form ok', listContacts);

  return (
    <div>
    <ul>
      {listContacts &&
        listContacts.map(i => (
          <li key={i.id}>
            <div>
              {i.name} {i.number}
            </div>
            <button onClick={() => onDeleteContact(i.id)}>Delete</button>
          </li>
        ))}
    </ul>
  </div>
  );
}

export default ContactList;
