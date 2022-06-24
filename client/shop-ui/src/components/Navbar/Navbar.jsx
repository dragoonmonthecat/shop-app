import { React } from 'react';
import './Navbar.css'
import Logo from '../../Assets/Images/HestiaLogo.png';
import SearchBar from '../Utilities/SearchBar/SearchBar';

const Navbar = () =>
{
    return (
        <div className='navbar-container'>
            <img src={Logo} alt='brand-logo' className='brand-logo'></img>
            <SearchBar />
            <h5>Profile/Basket</h5>
        </div>
    );
}

export default Navbar;