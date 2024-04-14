import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { ContactsSection } from './Section/Section';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsSection title="Phonebook">
        <ContactForm />
      </ContactsSection>
      <ContactsSection title="Contacts">
        <ContactsFilter />
        <ContactList />
      </ContactsSection>
    </>
  );
};
