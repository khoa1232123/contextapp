import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/dist/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const localData = localStorage.getItem("books");
  const [books, setBooks] = useState(localData ? JSON.parse(localData) : []);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  const addBook = (title) => {
    setBooks([...books, { title, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
