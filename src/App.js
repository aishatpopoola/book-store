import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Category/Categories';
import { addAllBooks } from './redux/books/books';

const books = [{
  id: 'hjjhyg',
  title: 'a lost treasure',
  author: 'john',
  category: 'adventure',
}];

function App() {
  const dispatch = useDispatch();
  const storeAllBooks = () => {
    dispatch(addAllBooks(books));
  };
  useEffect(() => {
    storeAllBooks();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
