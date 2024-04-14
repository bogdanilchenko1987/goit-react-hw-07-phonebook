import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ErrorText, List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import { ThreeCircles } from 'react-loader-spinner';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && (
        <ThreeCircles
          visible={true}
          height="40"
          width="40"
          color="blue"
          ariaLabel="three-circles-loading"
        />
      )}
      {error && <ErrorText>{error}</ErrorText>}

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

