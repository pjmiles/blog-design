import Axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./CreateBlog";
import Comments from "./Comment";


const getComment_url = BASE_URL + "comment/all_comments/";
const postComment_url = BASE_URL + "comment";

const Blogs = () => {
  const [comments, setComments] = useState([]); //comment state
  const [blogs, setBlogs] = useState([]);        // blog state
  const [selectPost, setSelectPost] = useState(""); // selecting a particular blog post
  const [content, setContent] = useState(""); // state for content of the comment

  // get comment from the api
  const getComments = async (id) => {
    try {
      const { data } = await Axios.get(getComment_url + id);
      setComments(data.data);
    } catch {
      console.log("Error getting comment");
    }
  };

  const handleClick = (id) => {
    setSelectPost(id);  // to select a particular post with an id
    getComments(id); // on click it add the comment to the post
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      await Axios.post(postComment_url, { content, post: id });
    } catch{
      console.log("Error posting comment");
    }
    setContent("");
    getComments(id);
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
              <form onSubmit={(e) => handleSubmit(e, blog.id)}>
                <textarea
                  cols="20"
                  rows="3"
                  className="post-comment"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
                <button className="post-btn">Post</button>
              </form>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Blogs;
