import './header.css'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl"
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div className='header-top'>
                <CiSearch />
                <h1>Avion</h1>
                <div className='header-icons'>
                    <SlBasket />
                    <FaRegUserCircle />
                </div>
            </div>
            <div className='header-bottom'>
                <NavLink to="/" className='link'>Главная</NavLink>
                <NavLink to="/page-two" className='link'>Главная 2</NavLink>
                <NavLink to="/product-listing" className='link'>Каталог</NavLink>
                <NavLink to="/product-listing-two" className='link'>Каталог 2</NavLink>
            </div>
        </div>
    )
}
