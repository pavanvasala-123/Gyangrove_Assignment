import React from 'react'
import '../Navbar/Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx"
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";



function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-container">
        <h3>BookUsNow</h3>
      <div className='navItems'>
        <div className='nav_item categories'>
            <RxHamburgerMenu/>
            <h4>Categories</h4>
        </div>
        <div className="nav-search">
        <input
          className="nav-search-input"
          type="text"
          placeholder="Search"
        />
        <CiSearch />
      </div>
      <div className='nav_item'>
        <CiHeart/>
        <h4>Favorites</h4>
      </div>
      <div>
        <button className='signIn_button'>SignIn</button>
      </div>
      </div>
     
    </div>
    <div className='nav-bottom'>
        <div className='location'>
            <CiLocationOn />
            <p>Mumbai,India</p>
        </div>
        <ul>
            <li>Live Shows</li>
            <li>Streams</li>
            <li>Movies</li>
            <li>Plays</li>
            <li>Events</li>
            <li>Stores</li>
            <li>Sports</li>
            <li>Activities</li>
        </ul>
    </div>
  </nav>
  )
}

export default Navbar