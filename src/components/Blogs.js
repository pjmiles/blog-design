import { BlogPosts } from "./Data";

const Blogs = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-header-text">Blogs...</h2>
      {BlogPosts.map((blogpost) => {
        return(
          <div className="blog-content">
            <h5 className="blog-title">{blogpost.title}</h5>
            <p className="blog-content">{blogpost.content}</p>
            <p className="blog-author">{blogpost.author}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Blogs;
