import React from 'react';
import { getCurrentDate } from '../helpers/getCurrentDate';
import css from './header.module.css';
import Logo from '../assets/img/logo_svg.svg';
import Navegacao from './Navegacao';
import Container from 'react-bootstrap/Container'


export default function Header({handleClickOpenModalDor}) {
  return (
    <Container>
    <div className={css.row}>
      <img className={css.logo} src={Logo} alt="Logo" />
      <div className={css.dadosUsuario}>
        <span>Aline Bonfietti Frederico</span>
        <span>INFOR</span>
        <span>{getCurrentDate()}</span>
      </div>

    </div>
    
    <Navegacao handleClickOpenModalDor={handleClickOpenModalDor}/> 
    <hr className={css.hr1}/>
    <hr className={css.hr2}/>
    
    </Container>
  );
}
