import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Item from "../NavBar/Item/Item"


const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' classname='option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <Item key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button"></button>
            <Link to='/chechout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart