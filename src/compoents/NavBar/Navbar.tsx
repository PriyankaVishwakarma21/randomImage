
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className='checkbtn'>
                <FaBars />
            </label>
            <label className='logo'>Images</label>
            <ul>
                <li><Link className='nav-link active' to="/">Home</Link></li>
                <li><Link className='nav-link ' to="/history">History</Link></li>
                <li><Link className='nav-link ' to="/cart">Cart</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;