import { useState } from "react";
import Nav from "../nav/Nav"
import "./Header.css"
import { FaXing } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  //меняет значение на противоположное с помощью !
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">Ilay</a>
          <Nav />
          <div className="nav-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <FaXing/> : <HiMenu/>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header