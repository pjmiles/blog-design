import Axios from "axios";
import { useState } from "react";
import { BASE_URL } from "./CreateBlog";

const postComment_url = BASE_URL + "comment";

const Comments = ({ comments }) => {
  const [content, setContent] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(postComment_url, { content, post: blog.id });
    } catch (error) {
      console.log(error);
    }
    setContent("");
  };

  return (
    <div className="comment-section">
      <div className="comment-box">
        <h4 className="comment-header">Comments</h4>
        {comments.map((comment) => {
          return (
            <p className="comment-content" key={comment.id}>
              {comment.content}
            </p>
          );
        })}
      </div>
      <form onSubmit={handleClick}>
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
  );
};

export default Comments;
