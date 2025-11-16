import "../css/MyFirstComponentStyle.css";

const TextComponent = ({ postName, postBody, children }) => {
  return (
    <div className="cont">
      <h1 className="paragraph">{postName}</h1>
      <hr />
      <h2 className="secondp">{postBody}</h2>

      <div className="parag">{children}</div>
    </div>
  );
};

export default TextComponent;
