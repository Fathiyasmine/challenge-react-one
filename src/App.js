import "./App.css";
import ButtonComponent from "./ButtonComponent.js";
import MyFirstComponent from "./MyFirstComponent.js";
import SecondComponent from "./SecondComponent.js";
import SideComponent from "./SideComponent.js";
import TextComponent from "./TextComponent.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFirstComponent />
        <SecondComponent>
          <TextComponent />
        </SecondComponent>
        <SecondComponent>
          <TextComponent />
        </SecondComponent>
        <SecondComponent>
          <TextComponent />
        </SecondComponent>
        <SecondComponent>
          <TextComponent />
        </SecondComponent>
        <SecondComponent>
          <TextComponent />
        </SecondComponent>
        <containerSide />
        <SideComponent>
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
        </SideComponent>
      </header>
    </div>
  );
}

export default App;
