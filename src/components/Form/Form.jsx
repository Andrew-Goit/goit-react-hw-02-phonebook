import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TheForm, Label, Input, SubmitBtn } from './Form.styled';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id-1',
      name: '',
      number: '',
    };
    this.i = 1;
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ id: `id-${this.i + 1}` });
    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <TheForm action="" onSubmit={this.handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />

        <Label htmlFor="tel">Number</Label>
        <Input
          id="tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </TheForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};