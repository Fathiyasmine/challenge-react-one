import "./Css/App.css";
import ButtonComponent from "./Components/ButtonComponent.jsx";
import MyFirstComponent from "./Components/MyFirstComponent.jsx";
import TextComponent from "./Components/TextComponent.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFirstComponent />
        <div className="globalcontainer">
          <div className="textcomp">
            <div className="textcontainer">
              <TextComponent />
            </div>
            <div className="textcontainer">
              <TextComponent />
            </div>
            <div className="textcontainer">
              <TextComponent />
            </div>
            <div className="textcontainer">
              <TextComponent />
            </div>
            <div className="textcontainer">
              <TextComponent />
            </div>
          </div>

          <div className="sidecontainer">
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
