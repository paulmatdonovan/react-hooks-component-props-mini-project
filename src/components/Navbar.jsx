import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'
import Phuket from '../assets/Phuket.jpg'

export const Navbar = () => {
    return (

        <div className='navbar'>
            <div className='nav-logo'>
                <img src={Phuket} alt="" />
                <p>Rejuvenate</p>
            </div>
            <ul className='nav-menu'>

                <li><NavLink className="navbar-menu" to='/'>Home</NavLink></li>
                <li><NavLink className="navbar-menu" to='/about'>About</NavLink></li>
                <li><NavLink className="navbar-menu" to='/articles'>Articles</NavLink></li>
                <li><NavLink className="navbar-menu" to='/add'>Create</NavLink></li>


            </ul>
        </div >


    )

}