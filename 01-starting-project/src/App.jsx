import Header from "./components/Header/Header.jsx";
import CORECONCEPTS from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <CORECONCEPTS />
        <Examples />
      </main>
    </>
  );
}

export default App;
