import { React } from 'react';
import './Navbar.css'
import Logo from '../../Assets/Images/HestiaLogo.png';
import SearchBar from '../Utilities/SearchBar/SearchBar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () =>
{
    return (
        <div className='navbar-container'>
            <img src={Logo} alt='brand-logo' className='brand-logo'></img>
            <SearchBar />
            <div className='basket-account-container'>
                <ShoppingBasketIcon />
                <PersonIcon />
            </div>
        </div>
    );
}

export default Navbar;