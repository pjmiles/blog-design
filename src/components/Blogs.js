import Axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./CreateBlog";
import Comments from "./Comment";

const getComment_url = BASE_URL + "comment/all_comments/";

const Blogs = () => {
  const [comments, setComments] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectPost, setSelectPost] = useState("");

  const handleClick = (id) => {
    setSelectPost(id);

    const getComments = async () => {
      try {
        const { data } = await Axios.get(getComment_url + id);
        console.log(data.data);
        setComments(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  };

  useEffect(() => {
    Axios.get(BASE_URL)
      .then((res) => setBlogs(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-header-text">Blogs...</h2>
      {blogs.map((blog) => {
        return (
          <>
            <div className="blog-card" key={blog?.id}>
              <h5 className="blog-title">{blog?.title}</h5>
              <p className="blog-content">{blog?.content}</p>
              <p className="blog-author">{blog?.name}</p>
              <button
                className="comment-btn"
                onClick={() => handleClick(blog.id)}
              >
                {" "}
                view comments
              </button>
            </div>
            <div
              className={`comment ${
                selectPost === blog.id ? "active" : "not-active"
              } `}
            >
              <Comments comments={comments} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Blogs;
