import Content from "./components/content/Content";
import Part2 from "./components/LIST/Part2";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="app">
    <div className="sections">
      <Topbar/>
      <Part2/>
      <Content/>
    </div>
    </div>
  );
}

export default App;
