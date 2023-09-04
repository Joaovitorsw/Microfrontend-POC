import "./header.scss";
export default function Root(props) {
  const list = [{ message: "React" }, { message: "App" }];
  return (
    <div
      className="header"
      onClick={(event) => {
        console.log(event);
      }}
    >
      {list.map((value) => {
        return <div key={value.message}>{value.message}</div>;
      })}
    </div>
  );
}
