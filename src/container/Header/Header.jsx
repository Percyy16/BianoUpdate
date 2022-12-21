import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Mainbar from '../../components/Mainbar/Mainbar';

import './Header.scss';

const Header = () => {

  return (
    <div className='bia__header'>
      <Sidebar />
      <Mainbar />
    </div>
  )
}

export default Header