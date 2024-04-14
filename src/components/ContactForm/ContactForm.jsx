import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contactsSlice';

import { Button, Form, Input, Label } from './ContactForm.styled';
import Modal from 'components/Modal/Modal';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [modalActive, setModalActive] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addNewContact({ name, number }));

    setName('');
    setNumber('');
    setModalActive(false);
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <Form action="submit" autoComplete="off" onSubmit={handleSubmit}>
          <Label htmlFor="name">
            <b>Name:</b>
            <Input
              type="text"
              name="name"
              placeholder="Enter contact name"
              required
              value={name}
              onChange={handleChange}
            />
          </Label>
          <Label htmlFor="number">
            <b>Number:</b>
            <Input
              type="tel"
              name="number"
              placeholder="Enter contact number"
              required
              value={number}
              onChange={handleChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Modal>
      <Button
        title="Click to open Modal"
        style={{ height: '60px' }}
        type="button"
        onClick={() => setModalActive(true)}
      >
        ➕ Add Contact
      </Button>
    </>
  );
};
