import "../css/MyFirstComponentStyle.css";

const TextComponent = () => {
  return (
    <div>
      <h1 className="paragraph">This is the post title</h1>
      <hr />
      <p className="secondp">This is the post body</p>
    </div>
  );
};

export default TextComponent;
