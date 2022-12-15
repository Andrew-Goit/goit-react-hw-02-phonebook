
import React, { Component } from 'react';
import {Form} from './Form/Form';
import {Filter} from './Filter/Filter';
import {Contacts} from './Contacts/Contacts';
import { AppBox } from './App.styled';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  formHandlerSubmit = data => {
    this.state.contacts.map(element => {
      if (element.name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${data.name} is already in contacts.`);
      }
      return element.name;
    });
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  handleChangeFilter = data => {
    this.setState({ filter: data });
  };

  handleClickDelete = data => {
    console.log(data);
    this.setState({
      contacts: this.state.contacts.filter(element => element.id !== data),
    });
  };

  render() {
    return (
      <AppBox>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formHandlerSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} />
        <Contacts
          onDelete={this.handleClickDelete}
          data={this.state.contacts}
          filter={this.state.filter}
        />
      </AppBox>
    );
  }
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };