import { React } from 'react';
import './Navbar.css'
import Logo from '../../Assets/Images/HestiaLogo.png';

const Navbar = () =>
{
    return (
        <div className='navbar-container'>
            <img src={Logo} alt='brand-logo' className='brand-logo'></img>
            <h4>Search Bar</h4>
            <h5>Profile/Basket</h5>
        </div>
    );
}

export default Navbar;