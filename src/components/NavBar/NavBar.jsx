import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Mitenis</h1>
            <div>
                <button>Raquetas</button>
                <button>Zapatillas</button>
                <button>indumentaria</button>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar