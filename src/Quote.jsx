export default function Quote(props) {
  const { content, author } = props.quote;
  return (
    <div
      className="rounded-md border-2 border-green-600 bg-green-200 p-4 text-center
    "
    >
      <p>{content}</p>
      <p className="font-bold">{author}</p>
    </div>
  );
}
