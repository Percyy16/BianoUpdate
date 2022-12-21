import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';

import './Navbar.scss';

const Navbar = () => {

  return (

      <div className='bia__navbar'>
        <div className='bia__navbar-box'>
          <Link to="/" className='bia__navbar-box-text-main'>Kategorie</Link>
        </div>
        <div className='bia__navbar-box'>
          <Link to="/favorite" className='bia__navbar-box-text'><AiOutlineHeart color="#F58A8A" /> Oblíbené</Link>
        </div>
        <div className='bia__navbar-box'>
          <Link to="/reco" className='bia__navbar-box-text'><AiOutlineStar color="#F58A8A" /> Doporučené</Link>
        </div>
      </div>
  )
}

export default Navbar