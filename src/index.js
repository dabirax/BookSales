import React from "react";
import ReactDOM from "react-dom/client";

import "./output.css";
import { books } from "./books";
import EachBook from "./Book";

//Passing the whole object
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      <h1 className="mt-16 text-center capitalize">amazon best sellers</h1>
      <section className="w-[90vw] max-w-6xl m-20 grid items-start gap-8 md:grid-cols-3">
        {books.map((book, index) => {
          // return <Book book={book} key={book.id} />;
          //Spread Operator
          return (
            <EachBook
              {...book}
              key={book.id}
              getBook={getBook}
              number={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default BookList;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
