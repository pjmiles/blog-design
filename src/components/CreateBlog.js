import { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export const BASE_URL = 'https://blogpostapi1.herokuapp.com/'

const CreateBlog = () => {
  const [newBlog, setNewBlog] = useState({ title: "", content: "", name: "" })
  let navigate = useNavigate();

  const getBlogDetails = ((event) =>{
    setNewBlog(current => ({...current, [event.target.name]: event.target.value}))
  })

  // sumbit blog post func
  const submitBlogPost = (async() =>{
    try {
      const result = await Axios.post(BASE_URL, newBlog)
      if(result?.status === 200){
        return navigate("/", {replace: true});
      }
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <div className="form-section">
      <h3 className="form-heading">Create Blog</h3>

      <div className="form-container">
        <form>
          <div className="form-control">
            <label htmlFor="title">Blog Title</label>
            <input
              className="form-input"
              type="text"
              id="title"
              name="title"
              value={newBlog.title}
              placeholder="title"
              onChange={getBlogDetails}
            
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="content">Blog Content</label>
            <textarea
              className="form-input-content"
              type="text"
              id="content"
              name="content"
              value={newBlog.content}
              placeholder="content"
              onChange={getBlogDetails}
            
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="author">Author</label>
            <input
              className="form-input"
              type="text"
              id="author"
              name="name"
              value={newBlog.name}
              placeholder="name"
              onChange={getBlogDetails}
          
            ></input>
          </div>

          <input className="submit-btn" type="submit" onClick={submitBlogPost} required></input>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
