import "./MyFirstComponentStyle.css";

export default function TextComponent() {
  return (
    <div className="text">
      <p className="paragraph">This is the post title</p>
      <hr></hr>
      <p className="secondp">This is the post body</p>
    </div>
  );
}
