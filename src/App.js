import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={ <Navbar /> }/>
        <Route path="create" element={ <Navbar/> }/>
      </Routes>
    </div>
  );
}

export default App;
