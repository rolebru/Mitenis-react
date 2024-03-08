import { NavLink, Link } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h1>Mitenis</h1>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/raquetas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Raquetas</NavLink>
                <NavLink to={'/category/zapatillas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
                <NavLink to={'/category/indumentaria'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar