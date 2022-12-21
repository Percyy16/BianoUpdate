import React, { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AiOutlineFolder } from 'react-icons/ai';
import { IoIosArrowUp, IoIosArrowBack } from 'react-icons/io';
import './Sidebar.scss';

const Sidebar = () => {

    const [open, setOpen] = useState(true);

  return (
    <div className='bia__menu'>
       <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="bia__button"
        >
          <div className='bia__button-box'>
            <div>
              <AiOutlineFolder color="#A0AEBD" fontSize={22} /> Kategorie
            </div>
            <IoIosArrowUp color="#A0AEBD" fontSize={22} />
          </div>
        </button>
        <Collapse in={open}>
          <div id="collapse-div">
            <ul className='bia__collapse-main'>
              <li className='bia__collapse-text-main'><IoIosArrowBack color='#A0AEBD' /> Všechny produkty</li>
              <li>Sedací soupravy</li>
              <li>Obývací stěny</li>
              <li>Křesla</li>
              <li>Lenošky</li>
              <li>Postele</li>
            </ul>
          </div>
        </Collapse>
        </div>
  )
}

export default Sidebar