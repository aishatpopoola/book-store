import React, { useState, useEffect } from 'react';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';

const Home = () => {
  const [bookList, setBookList] = useState([]);
  // const getBooks = () => {
  //   setBookList(books);
  // };
  // useEffect(() => {
  //   getBooks();
  // }, []);

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
