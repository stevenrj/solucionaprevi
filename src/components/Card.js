import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import imgProblema from '../assets/img/automation.jpg';
import css from './card.module.css';
import {
  FaBell,
  FaComments,
  FaRegHandshake,
} from 'react-icons/fa';
import ModalComment from './ModalComment';


export default function Card() {
  const [iconBell, setIconBell] = useState(false)
  const [iconHandShake, setIconHandShake] = useState(false)
  const [isModalCommentOpen, setModalCommentOpen] = useState(false)

  const handleIconBellClick = () => {
    setIconBell(!iconBell)
  };

  const handleIconHandShakeClick = () => {
    setIconHandShake(!iconHandShake)
  };

  const handleIconCommentClick = () => {
    setModalCommentOpen(true)
  };

  const handleCloseCommentClick = () => {
    setModalCommentOpen(false)
  }

  return (
    
    <Container className={css.row}>
      {isModalCommentOpen && <ModalComment handleCloseCommentClick={handleCloseCommentClick}/>}
      <div>
        <img
          className={css.imgProblema}
          src={imgProblema}
          alt="Imagem do problema" 
        />
        <div className={css.container_icons}>
          <FaRegHandshake size={30} className={`${iconHandShake ? css.ativo : css.inativo} ${css.icon}`} onClick={handleIconHandShakeClick}/>
          <FaComments size={30} className={css.icon} onClick={handleIconCommentClick}/>
          <FaBell
            size={30}
            className={`${iconBell ? css.ativo : css.inativo} ${css.iconBell}`}
            onClick={handleIconBellClick}
          />
        </div>
      </div>

      <div className={css.infoCard}>
        <span className={css.nomeProblema}>Automatizacao do processo XPTO</span>
        <div className="form-group col-lg-15">
          <label htmlFor="descProblema">Problema</label>
          <textarea
            className="form-control"
            id="descProblema"
            rows="3"
            disabled
          ></textarea>
        </div>
        <div className="form-group col-lg-15">
          <label htmlFor="descSolucao">Proposta de Solucao</label>
          <textarea
            className="form-control"
            id="descSolucao"
            rows="3"
            disabled
          ></textarea>
        </div>
      </div>
    </Container>
  );
}
