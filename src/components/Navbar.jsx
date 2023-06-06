import { Link } from "react-router-dom"

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
           <LInk to={`/`}>Blog</LInk>
        </h2>
        <ul>
            <li>
            <LInk to={`/`}>Home</LInk>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">
                Novo Post
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;
