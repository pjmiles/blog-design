import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./components/CreateBlog";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="container">
      <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/create" element={<Create />} />
        </Routes>
    </div>
  );
}

export default App;
