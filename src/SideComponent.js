import "./MyFirstComponentStyle.css";

export default function SideComponent({ children }) {
  return <div className="containerSide">{children}</div>;
}
