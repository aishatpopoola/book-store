export const redux = ('redux');

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const ADD_ALL_BOOKS = 'ADD_ALL_BOOKS';

const initialState = [];

export const addAllBooks = (payload) => ({
  type: ADD_ALL_BOOKS,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  // payload- any aditonal info you want to send
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_BOOKS:
      return action.payload;

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
