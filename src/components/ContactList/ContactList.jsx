import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <b>LOADING...</b>}
      {error && <b>{error}</b>}

      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} id={id} name={name} number={number} />
            );
          })}
        </List>
      )}
    </>
  );
};

// ----------------------

// import { useSelector } from 'react-redux';

// import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import { List } from './ContactList.styled';
// import {
//   selectContacts,
//   selectFilter,
//   selectFilteredContacts,
// } from '../../redux/selectors';

// const filterContacts = (filtered, contacts) => {
//   const FilterlowerCase = filtered.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(FilterlowerCase)
//   );
// };

// export const ContactList = () => {
//   const contacts = useSelector(state => state.contacts.items);
//   const filter = useSelector(state => state.filter);

//   const filteredContacts = filterContacts(contacts, filter);
//   return (
//     <List>
//       {contacts &&
//         filteredContacts.map(({ id, name, number }) => {
//           return (
//             <ContactListItem key={id} id={id} name={name} number={number} />
//           );
//         })}
//     </List>
//   );
// };
