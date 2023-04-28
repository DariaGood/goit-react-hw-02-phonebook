import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
      number: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //let newContact = null;

    const nanoid = customAlphabet('1234567890abcdef', 10);
    const id = nanoid();
   const  newContact = {
      id,
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(newContact);
    this.setState({ name: '', number: '' });
    console.log('form ok', newContact);
  
    
  }

  handleChangeName(e) {
    console.log('sjjsk', e.target.value);
    this.setState({ name: e.target.value });
  }

  handleChangeNumber(e) {
    console.log('sjjsk', e.target.value);
    this.setState({ number: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeName}
            value={this.state.name}

          ></input>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChangeNumber}
            value={this.state.number}

          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;

// import React, { useState } from 'react';
// import { customAlphabet } from 'nanoid';

// const ContactForm = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const nanoid = customAlphabet('1234567890abcdef', 10);
//     const id = nanoid();
//     const newContact = {
//       id,
//       name,
//       number,
//     };

//     setContacts([...contacts, newContact]);
//     setName('');
//     setNumber('');

//     console.log('form ok', newContact, contacts);
//   };

//   const handleChangeName = (e) => {
//     console.log('sjjsk', e.target.value);
//     setName(e.target.value);
//   };

//   const handleChangeNumber = (e) => {
//     console.log('sjjsk', e.target.value);
//     setNumber(e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChangeName}
//           value={name}
//         ></input>
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleChangeNumber}
//           value={number}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
