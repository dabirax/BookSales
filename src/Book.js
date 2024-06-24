const Book = ({ author, title, img, id, getBook }) => {
  // const displayTitle = () => {
  //   console.log(title);
  // };

  const getJustOneBook = () => {
    getBook(id);
  };
  return (
    <article className="bg-white rounded-2xl p-8 text-center">
      <Image img={img} title={title} />
      <Title title={title} />
      {/* <button onClick={getJustOneBook}>Get Book</button>  */}
      <button onClick={() => getBook(id)}>Get Book</button>
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
  const { title } = props;
  return <h2 className="mt-4 text-base">{props.title}</h2>;
};
const Author = ({ author }) => {
  return (
    <h4 className="mt-2 text-[#617d98] text-xs tracking-[2px]">{author}</h4>
  );
};

export default Book;