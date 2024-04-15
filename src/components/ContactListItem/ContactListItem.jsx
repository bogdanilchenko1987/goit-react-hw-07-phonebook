import PropTypes from 'prop-types';
import { removeContact, editContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

import { Delete, Edit, ListItem } from './ContactListItem.styled';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import {
  Form,
  Button,
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [modalActive, setModalActive] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const dispatch = useDispatch();

  const handleEdit = e => {
    e.preventDefault();
    const editedContact = {
      id,
      name: editName,
      number: editNumber,
    };
    dispatch(editContact(editedContact));
    setModalActive(false);
  };

  return (
    <>
      <ListItem>
        {name} : {number}
        <div>
          <Delete type="button" onClick={() => dispatch(removeContact(id))} />{' '}
          <Edit onClick={() => setModalActive(true)} />
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <Form action="submit" autoComplete="off" onSubmit={handleEdit}>
            <Label htmlFor="name">
              <b>Name:</b>
              <Input
                type="text"
                name="name"
                placeholder="Enter contact name"
                required
                value={editName}
                onChange={e => setEditName(e.target.value)}
              />
            </Label>
            <Label htmlFor="number">
              <b>Number:</b>
              <Input
                type="tel"
                name="number"
                placeholder="Enter contact number"
                required
                value={editNumber}
                onChange={e => setEditNumber(e.target.value)}
              />
            </Label>
            <Button type="submit">
              <b>Edit contact</b>
            </Button>
          </Form>
        </Modal>
      </ListItem>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
