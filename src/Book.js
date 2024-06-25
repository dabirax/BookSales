

const Book = ({ author, title, img, id, number, getBook }) => {
  // const displayTitle = () => {
  //   console.log(title);
  // };
console.log(number);
  const getJustOneBook = () => {
    getBook(id);
  };
  return (
    <article className="bg-white rounded-2xl p-8 text-center relative">
      <Number number={`#${number+1}`} />
      <Image img={img} title={title} />
      <Title title={title} />
      {/* <button onClick={getJustOneBook}>Get Book</button>  */}
      <button onClick={() => getBook(id)}>Get Book</button>
      <Author author={author} />
    </article>
  );
};
const Number = (props) => {
  return (
    <h1 className="absolute top-0 left-0 p-3 text-base rounded-tl-2xl rounded-br-2xl bg-[#c35600] text-white">
      {props.number}
    </h1>
  );
};
const Image = (props) => {
  return (
    <img src={props.img} alt={props.title} className="w-96 object-cover" />
  );
};
const Title = (props) => {
  return <h2 className="mt-4 text-base">{props.title}</h2>;
};
const Author = ({ author }) => {
  return (
    <h4 className="mt-2 text-[#617d98] text-xs tracking-[2px]">{author}</h4>
  );
};

export default Book;
