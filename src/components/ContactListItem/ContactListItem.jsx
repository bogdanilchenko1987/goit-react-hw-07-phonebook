import PropTypes from 'prop-types';
import { removeContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

import { Delete, Edit, ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {name} : {number}
      <div>
        <Delete type="button" onClick={() => dispatch(removeContact(id))} />{' '}
        <Edit />
      </div>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
