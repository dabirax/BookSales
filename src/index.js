import React from "react";
import ReactDOM from "react-dom/client";
// import picone from "./images/one.jpg";
// import pictwo from "./images/two.jpg";
// import picthree from "./images/three.jpg";
import "./output.css";

// const Greeting = () => {
//   return (
//     <>
//       <div>
//         <h3>My First Component</h3>
//         <ul>
//           <li>
//             <a href="#">Hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>Gehazi</h2>
//     </>
//   );
// };
// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h2',{},'hello world'));
// };

// Nesting

// const Person = () => <h2>John the Baptist</h2>;
// const Message = () => {
//   return <h4>Seven horns ...</h4>;
// };

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

const firstBook = {
  author: "Jordan Moore",
  title: "Witnessing in the HS",
  img: "./images/one.jpg",
};
const secondBook = {
  author: "Praise Nelson",
  title: "Atomic Habits",
  img: "./images/two.jpg",
};
const thirdBook = {
  author: "George Myles",
  title: "Reassessing Your Chess Moves",
  img: "./images/three.jpg",
};

// const BookList = () => {
//   return (
//     <section className="w-[90vw] max-w-6xl m-20 grid gap-8 md:grid-cols-3">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       />
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//        />
//     </section>
//   );
// };
// const Book = (props) => {
//   return (
//     <article className="bg-white rounded-2xl p-8 text-center">
//       <Image img={props.img} title={props.title} />
//       <Title title={props.title} />
//       <Author author={props.author} />
//     </article>
//   );
// };

// ShortCut for props
const BookList = () => {
  return (
    <section className="w-[90vw] max-w-6xl m-20 grid gap-8 md:grid-cols-3">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
    </section>
  );
};
const Book = (props) => {
  console.log(props);
  const { author, title, img } = props;
  return (
    <article className="bg-white rounded-2xl p-8 text-center">
      <Image img={img} title={title} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};
const Image = (props) => {
  return (
    <img src={props.img} alt={props.title} className="w-96 object-cover" />
  );
};
const Title = (props) => {
  const {title} = props;
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
