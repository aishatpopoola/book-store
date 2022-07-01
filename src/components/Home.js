import React, { useState, useEffect } from 'react';
import AddBookForm from './AddBookForm';
import Book from './Book';

const books = [{
  id: 2,
  title: 'the lost treasure',
  author: 'john',
  category: 'adventure',
}];

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const getBooks = () => {
    setBookList(books);
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {bookList.map((book) => (
        <div key={book.id}>
          <Book book={book} />
        </div>
      ))}
      <AddBookForm />
    </>
  );
};
export default Home;
