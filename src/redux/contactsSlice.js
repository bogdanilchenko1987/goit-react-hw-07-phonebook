import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://661a3bd9125e9bb9f29b9700.mockapi.io/contacts'
      );

      if (!response.ok) {
        throw new Error('Server Error. Try reload this page!');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async function ({ name, number }, { rejectWithValue, dispatch, getState }) {
    const contacts = getState().contacts.items;
    try {
      const newContact = {
        name,
        number,
      };
      const response = await fetch(
        'https://661a3bd9125e9bb9f29b9700.mockapi.io/contacts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newContact),
        }
      );

      if (!response.ok) {
        throw new Error('Error while adding new contact ');
      }
      const data = await response.json();

      contacts.some(contact => contact.name === data.name)
        ? alert(`${data.name} is already in your contacts`)
        : dispatch(addContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://661a3bd9125e9bb9f29b9700.mockapi.io/contacts/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Error while removing contact ');
      }

      dispatch(deleteContact(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setPending = (state, action) => {
  state.isLoading = true;
  state.error = false;
};

const setFulfilled = state => {
  state.isLoading = false;
};

const setFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      // state.items.some(contact => contact.name === action.payload.name)
      //   ? alert(`${action.payload.name} is already in your contacts`)
      //   : state.items.push(action.payload);
    },

    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, setPending)
      .addCase(fetchContacts.fulfilled, setFetchFulfilled)
      .addCase(fetchContacts.rejected, setRejected)
      .addCase(addNewContact.pending, setPending)
      .addCase(addNewContact.fulfilled, setFulfilled)
      .addCase(addNewContact.rejected, setRejected)
      .addCase(removeContact.pending, setPending)
      .addCase(removeContact.fulfilled, setFulfilled)
      .addCase(removeContact.rejected, setRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
