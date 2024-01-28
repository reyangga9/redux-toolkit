import "./App.css";
import RtkCounter from "../src/pages/Rtkcounter";
import RtkAPI from "./pages/RtkAPI";

function App() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      <RtkCounter />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <RtkAPI />
    </div>
  );
}

export default App;
