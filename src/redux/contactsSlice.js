import { createSlice } from '@reduxjs/toolkit';
import {
  editContact,
  fetchContacts,
  addNewContact,
  removeContact,
} from './operations';

const setRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setPending = state => {
  state.isLoading = true;
  state.error = false;
};

const setRemoveFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = false;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};
const setAddFulfilled = (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
  state.error = false;
};

const setFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = false;
  state.items = action.payload;
};

const SetEditFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = false;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, setPending)
      .addCase(fetchContacts.fulfilled, setFetchFulfilled)
      .addCase(fetchContacts.rejected, setRejected)
      .addCase(addNewContact.pending, setPending)
      .addCase(addNewContact.fulfilled, setAddFulfilled)
      .addCase(addNewContact.rejected, setRejected)
      .addCase(removeContact.pending, setPending)
      .addCase(removeContact.fulfilled, setRemoveFulfilled)
      .addCase(removeContact.rejected, setRejected)
      .addCase(editContact.pending, setPending)
      .addCase(editContact.fulfilled, SetEditFulfilled)
      .addCase(editContact.rejected, setRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
