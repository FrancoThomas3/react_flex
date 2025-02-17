import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { SiIfood } from "react-icons/si";

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <div>
                <SiIfood className="logo"/>
                </div>
                
                
                <ul className="nav-bar-options">
                    <li className="nav-bar-item">Home</li>
                    <li className="nav-bar-item">Productos</li>
                    <li className="nav-bar-item">Contacto</li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;