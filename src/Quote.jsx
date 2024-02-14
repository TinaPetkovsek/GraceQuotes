export default function Quote(props) {
  const { content, author } = props.quote;
  return (
    <>
      <p>{content}</p>
      <p className="font-bold">{author}</p>
    </>
  );
}
