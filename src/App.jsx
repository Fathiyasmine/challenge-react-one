import "./css/App.css";
import ButtonComponent from "./components/ButtonComponent.jsx";
import MyFirstComponent from "./components/MyFirstComponent.jsx";
import TextComponent from "./components/TextComponent.jsx";

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
