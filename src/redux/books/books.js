export const redux = ('redux');

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

export const addBook = (qty = 1) => ({
  type: ADD_BOOK,
  // payload- any aditonal info you want to send
  payload: qty,
});

export const removeBook = (qty = 1) => ({
  type: REMOVE_BOOK,
  // payload- any aditonal info you want to send
  payload: qty,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
export default reducer;
