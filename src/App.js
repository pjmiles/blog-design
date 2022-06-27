import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Blogs from "./components/Blogs";

function App() {
  return (
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} exact />
          <Route path="/create" element={<Create />} />
        </Routes>
        {/* <Create /> */}
      </div>
  );
}

export default App;
