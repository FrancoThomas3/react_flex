import './CartWidget.css';
import { FaCartShopping } from "react-icons/fa6";


function CartWidget() {
    return (
        
        <div className="cart-widget">
        <FaCartShopping className="cart-icon"/>
        
    </div>
    );
};

export default CartWidget;