import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook(book.id));
  };
  return (
    <div className="book-list">
      <h2>A single book</h2>
      <div className="book-info">
        {book.id}
        {book.title}
        <button type="button" onClick={removeBookFromStore}>Remove book</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
