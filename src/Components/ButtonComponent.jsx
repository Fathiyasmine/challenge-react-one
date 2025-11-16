import "../css/MyFirstComponentStyle.css";

const ButtonComponent = ({ title, children }) => {
  // if (title === null || title === "") {
  //   return null;
  // }
  return (
    <div>
      {title === null || title === "" ? (
        <div></div>
      ) : (
        <button className="button">
          {title}
          {children}
        </button>
      )}
    </div>
  );
};
export default ButtonComponent;
