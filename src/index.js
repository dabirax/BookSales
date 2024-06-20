import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Witnessing in the HS",
    img: "./images/one.jpg",
    id: 1,
  },
  {
    author: "Praise Nelson",
    title: "Atomic Habits",
    img: "./images/two.jpg",
    id: 2,
  },
  {
    author: "George Myles",
    title: "Reassessing Your Chess Moves",
    img: "./images/three.jpg",
    id: 3,
  },
];
// An Example
// const cities = ["Lagos", "San Andreas", "Moscow"];
// const newCities = cities.map((city) => {
//   return <h1 className="text-4xl">{city}</h1>;
// });

//Manual method
// const BookList = () => {
//   return (
//     <section className="w-[90vw] max-w-6xl m-20 grid items-start gap-8 md:grid-cols-3">
//       {books.map((book) => {
//         const { img, author, title, id } = book;
//         return <Book img={img} title={title} author={author} key={id} />;
//       })}
//     </section>
//   );
// };

//Passing the whole object
const BookList = () => {
  // const friends = ['john', 'peter', 'anna'];
  // // const newFriends = [...friends, 'susan'];
  // const friends = {
  //   name: 'Praise',
  //   job: 'Leader',
  // };
  // const newFriends = {...friends, sister: 'susan'};
  // console.log(friends);
  // console.log(newFriends);
  return (
    <section className="w-[90vw] max-w-6xl m-20 grid items-start gap-8 md:grid-cols-3">
      {books.map((book) => {
        // return <Book book={book} key={book.id} />;
        //Spread Operator
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
// const Book = (props) => {
//   const { author, title, img, children } = props.book;

//Spread Operator
//   const { author, title, img, children } = props;
//
//   return (
//     <article className="bg-white rounded-2xl p-8 text-center">
//       <Image img={img} title={title} />
//       <Title title={title} />
//       <Author author={author} />
//       {children}
//     </article>
//   );
// };

// Destructuring Method
// const Book = ({ book: { author, title, img, children } }) => {
  //Spread Operator Destructuring Method
  const Book = ({ author, title, img, children } ) => {
  return (
    <article className="bg-white rounded-2xl p-8 text-center">
      <Image img={img} title={title} />
      <Title title={title} />
      <Author author={author} />
      {children}
    </article>
  );
};
const Image = (props) => {
  return (
    <img src={props.img} alt={props.title} className="w-96 object-cover" />
  );
};
const Title = (props) => {
  const { title } = props;
  return <h2 className="mt-4 text-base">{props.title}</h2>;
};
const Author = ({ author }) => {
  return (
    <h4 className="mt-2 text-[#617d98] text-xs tracking-[2px]">{author}</h4>
  );
};

export default BookList;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
