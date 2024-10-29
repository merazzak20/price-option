import "./App.css";
import Navbar from "./components/Daisynav/Navbar/Navbar";
import PriceOption from "./components/PriceOption/PriceOption";
// import Daisynav from "./components/Daisynav/Daisynav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Daisynav></Daisynav> */}
      <h1 className="bg-rose-600 text-6xl">Vite + React</h1>
      <PriceOption></PriceOption>
    </>
  );
}

export default App;
