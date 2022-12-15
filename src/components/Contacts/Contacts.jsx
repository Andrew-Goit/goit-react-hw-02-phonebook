import PropTypes from 'prop-types';
import {
  ContactList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contacts.styled';

export const Contacts = props => {
  const { data, filter } = props;
  let filterData = data.filter(element => {
    return element.name.toLowerCase().includes(filter);
  });

  const onHandleClick = event => {
    props.onDelete(event.currentTarget.id);
  };

  if (!filterData.length) 
    return;

  return (
    <ContactList>
      {filterData.map(element => {
        const { name, number, id } = element;
        return (
          <ContactListItem key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <DeleteButton id={id} type="button" onClick={onHandleClick}>
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};


Contacts.propTypes = {
  props: PropTypes.shape({
    onDelete: PropTypes.func.isRequired,
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filter: PropTypes.string.isRequired,
  }),
};