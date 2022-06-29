
const Comments = ({ comments }) => {
  return (
    <div className="comment-section">
      <div className="comment-box">
        <h4 className="comment-header">Comments</h4>
        {comments.map((comment) => {
          return (
            <>
              <p className="comment-content" key={comment.id}>
                {comment.content}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
