import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const BASE_URL = "https://blogpostapi1.herokuapp.com/";

const CreateBlog = () => {
  const [newBlog, setNewBlog] = useState({ title: "", content: "", name: "" });
  let navigate = useNavigate();

  const handleChange = (event) => {
    setNewBlog((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // sumbit blog post func
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(BASE_URL, newBlog);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-section">
      <h1 className="form-heading">Create Blog</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title" />
            <input
              className="form-input"
              type="text"
              id="title"
              name="title"
              value={newBlog.title}
              placeholder="title"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="content" />
            <textarea
              className="form-input-content"
              type="text"
              id="content"
              name="content"
              value={newBlog.content}
              placeholder="content"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="author" />
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={newBlog.name}
              placeholder="name"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-submit-container">
            <button className="submit-btn" required>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
