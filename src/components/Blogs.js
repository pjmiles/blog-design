import Axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./CreateBlog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
   Axios.get(BASE_URL)
      .then((res) => setBlogs(res.data.data))
      .catch(console.log("something went wrong!"))
  },[]);

  return (
    <div className="blog-container">
      <h2 className="blog-header-text">Blogs...</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-card" key={blog?.id}>
            <h5 className="blog-title">{blog?.title}</h5>
            <p className="blog-content">{blog?.content}</p>
            <p className="blog-author">{blog?.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
