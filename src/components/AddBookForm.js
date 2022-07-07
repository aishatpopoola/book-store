import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import dynamicId from '../utils/dynamicId';
// import { addBook } from '../redux/books/books';

const categoryArray = ['Adventure', 'Romance', 'Action'];

const AddBookForm = () => {
  // const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ id: dynamicId(), title: '', author: '' });
  const submitBookToStore = () => {
    // dispatch(addBook(newBook));
  };

  console.log('AddBookForm');
  return (
    <form>
      <div>
        <label htmlFor="title">
          <input
            onChange={(e) => { setNewBook({ ...newBook, title: e.target.value }); }}
            value={newBook.title}
            type="text"
            name="title"
            id="title"
          />
        </label>
      </div>
      <div>
        <label htmlFor="author">
          <input
            onChange={(e) => {
              setNewBook({ ...newBook, author: e.target.value });
            }}
            value={newBook.author}
            type="text"
            name="author"
            id="author"
          />
        </label>
      </div>
      <div>
        <label htmlFor="category">
          <select>
            {categoryArray.map((category) => (
              <option key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

      </div>
      <button type="button" onClick={submitBookToStore}>Add book</button>
    </form>
  );
};

export default AddBookForm;
