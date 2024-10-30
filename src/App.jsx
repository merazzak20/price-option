import "./App.css";
import Navbar from "./components/Daisynav/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import LineChart from "./components/LineChart/LineChart";
import Phones from "./components/Phones/Phones";
// import Daisynav from "./components/Daisynav/Daisynav";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        {/* <Daisynav></Daisynav> */}
        <h1 className="bg-rose-600 text-6xl">Vite + React</h1>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App;
