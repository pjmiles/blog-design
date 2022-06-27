import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">PJBLOG</div>

      <div className="nav-item">
        <Link to="/" className="nav-link">Blogs</Link>
        <Link to="/create" className="nav-link">New Blog</Link>
      </div>
    </div>
  );
};