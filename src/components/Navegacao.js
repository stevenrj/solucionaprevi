import React from 'react';

import { FaBell } from 'react-icons/fa';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import css from './navegacao.module.css'


export default function Navegacao({handleClickOpenModalDor}) {
  const handleClickDor = () => {
    handleClickOpenModalDor()
  }

  return (
    <div>
      
      <Navbar color="primary" dark expand="md">
        <Nav className={`navbar navbar-expand-lg navbar-light bg-light `} >
            <NavItem>
              <NavLink href="/">SP Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={handleClickDor}>Conte a sua dor</NavLink>
            </NavItem>
            <NavItem className={css.ml_auto}>
              <NavLink href="#">
                <FaBell size={20} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Minha Conta</NavLink>
            </NavItem>
           
        </Nav>
      </Navbar>
      
    </div>
  );
}
