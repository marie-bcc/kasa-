import { Link, NavLink } from "react-router-dom"
import logo from '../Styles/Components/LOGO.svg'
export default function Navbar() {
    return (

        <nav className="navBar">
            <img src={logo} alt="logo" className="logoNav"></img>
            <div>
                <NavLink to="/" className={({isActive}) => `${isActive && "activeLink"} link `}
                >Accueil</NavLink>
                
                <NavLink to="/Apropos" className={({isActive}) => `${isActive && "activeLink"} link `}>A propos</NavLink>
            </div>

        </nav>
    )
}
