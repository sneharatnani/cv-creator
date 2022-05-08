export default function Button(props) {
  const { change, btnTxt } = props;
  return (
    <button onClick={change} className="button">
      {btnTxt}
    </button>
  );
}
