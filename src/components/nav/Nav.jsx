import { Link } from "react-scroll"
import "./Nav.css"


const Nav = () => {
  const items = ["home", "about", "skills", "services", "portfolio", "clients", "contact"]

  return (
    <nav className="nav">
      <div className="nav-menu">
      {items.map((item, index) => (
        <Link
        to={item}
        key={index}
        className="nav-link"
        >{item}</Link>
      ))}
{/* 
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#home" className="nav-link active">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>

        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul> */}
      </div>
    </nav>
  )
}

export default Nav