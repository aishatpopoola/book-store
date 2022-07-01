import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book }) => (
  <div className="book-list">
    <h2>A single book</h2>
    <div className="book-info">
      {book.id}
      {book.title}
      <button type="button">Remove book</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
