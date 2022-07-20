import React, { useState } from 'react';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
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
