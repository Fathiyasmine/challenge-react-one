import "./css/MyFirstComponentStyle.css";
import ButtonComponent from "./components/ButtonComponent.jsx";
import MyFirstComponent from "./components/MyFirstComponent.jsx";
import TextComponent from "./components/TextComponent.jsx";
const showCategories = true;

function App() {
  const posts = [
    {
      id: 1,
      personName: "20",
      postName: "Tarmeez Academy",
      postBody: "formation de developpement web avec ces diffrentes methodes",
      children: <p>this is the first body</p>,
    },
    {
      id: 2,
      postName: "hello world",
      postBody: "this is hello world article",
      children: <p>this is the second body</p>,
    },
    {
      id: 3,
      postName: "hello world",
      postBody: "this is hello world article",
      children: <p>this is the third body</p>,
    },
  ];
  const postsList = posts.map((post) => {
    return (
      <div className="textcontainer">
        <TextComponent
          key={post.id}
          postName={post.postName}
          personName={post.personName}
          postBody={post.postBody}
          children={post.children}
        />
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <MyFirstComponent />
        <div className="globalcontainer">{postsList}</div>
        <AppSideMenu />
      </header>
    </div>
  );
}

function AppSideMenu() {
  const categories = [
    { id: 1, title: "new", children: <p>***</p> },
    {
      id: 2,
      title: "les plus visites",
      children: <img src="assets/images/téléchargement.jfif" alt="" />,
    },
    {
      id: 3,
      title: "articles speciaux",
      children: (
        <div>
          {" "}
          <p>***</p>
          <img src="assets/images/téléchargement.jfif" alt="" />
        </div>
      ),
    },
  ];
  const categoriesList = categories.map((cat) => {
    return (
      <ButtonComponent key={cat.id} title={cat.title}>
        {cat.children}
      </ButtonComponent>
    );
  });
  if (showCategories === true) {
    return <div className="sidecontainer">{categoriesList}</div>;
  } else {
    return null;
  }
}
export default App;
