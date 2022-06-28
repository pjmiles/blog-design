const Create = () => {
  return (
    <div className="form-section">
      <h3 className="form-heading">Create Blog</h3>

      <div className="form-container">
        <form action="" method="POST">
          <div className="form-control">
            <label for="title">Blog Title</label>
            <input
              className="form-input"
              type="text"
              placeholder="title"
              required
            ></input>
          </div>
          <div className="form-control">
            <label for="content">Blog Content</label>
            <textarea
              className="form-input-content"
              type="text"
              placeholder="content"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label for="author">Author</label>
            <input
              className="form-input"
              type="text"
              placeholder="name"
              required
            ></input>
          </div>

          <input className="submit-btn" type="submit" required></input>
        </form>
      </div>
    </div>
  );
};

export default Create;
