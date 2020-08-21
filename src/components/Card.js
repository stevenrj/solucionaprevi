import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import imgProblema from '../assets/img/automation.jpg';
import css from './card.module.css';
import * as api from '../api/apiService';
import { FaBell, FaComments, FaRegHandshake } from 'react-icons/fa';
import ModalComment from './ModalComment';
import Button from './button/Button';

export default function Card({problem, ideia}) {
  const [ideias, setIdeias] = useState([]);
  const [problemas, setProblemas] = useState([]);
  const [iconBell, setIconBell] = useState(false);
  const [iconHandShake, setIconHandShake] = useState(false);
  const [isModalCommentOpen, setModalCommentOpen] = useState(false);

  useEffect(() => {
    setProblemas([...problemas, problem])
    setIdeias([...ideias, ideia])
    console.log('problemas', problemas);
  }, [])

  useEffect(() => {
    const getDores = async () => {
      const allDores = await api.getAllProblemas();
      allDores.sort((a, b) => b.IdProblema - a.IdProblema)
      setProblemas(allDores);
    };
    getDores();

    return () => {
      setProblemas([])
    }
  }, []);

  useEffect(() => {
    if (problemas) {
      const getSolucoes = async () => {
        const allIdeias = await api.getAllIdeias();        
        setIdeias(allIdeias);
      };
      getSolucoes();
    }
  }, [problemas]);



  const buscarDescricaoIdeia = (paramFKProblema) => {
    if (paramFKProblema && ideias){
      const ideia = ideias.find(ideia => ideia.FkProblema === Number(paramFKProblema))
     // console.log('paramFKProblema', paramFKProblema);
     // console.log('ideia', ideia);
      return ideia ? ideia.descricao : ''
    }
  }

  const handleIconBellClick = () => {
    setIconBell(!iconBell);
  };

  const handleIconHandShakeClick = () => {
    setIconHandShake(!iconHandShake);
  };

  const handleIconCommentClick = () => {
    setModalCommentOpen(true);
  };

  const handleCloseCommentClick = () => {
    setModalCommentOpen(false);
  };

  return (
    <Container>
      {problemas &&
        problemas.map((problema) => (
          <div key={`${problema.IdProblema}${problema.nome}`} className={css.row}>
            {isModalCommentOpen && (
              <ModalComment handleCloseCommentClick={handleCloseCommentClick} 
              idProblema={problema.IdProblema}
              />
            )}

            <div className={css.item}>
              <img
                className={css.imgProblema}
                src={imgProblema}
                alt="Imagem do problema"
              />
              <div className={css.container_icons}>
                <FaRegHandshake
                  size={30}
                  className={`${iconHandShake ? css.ativo : css.inativo} ${
                    css.icon
                  }`}
                  onClick={handleIconHandShakeClick}
                />
                <FaComments
                  size={30}
                  className={css.icon}
                  onClick={handleIconCommentClick}
                />
                <FaBell
                  size={30}
                  className={`${iconBell ? css.ativo : css.inativo} ${
                    css.iconBell
                  }`}
                  onClick={handleIconBellClick}
                />
              </div>
            </div>

            <div className={css.infoCard}>
              <span className={css.nomeProblema}>{problema.nome}</span>
              <div className="form-group col-lg-15">
                <div className={css.row}>
                  <label htmlFor="descProblema">Problema</label>
                  <Button>Bora Resolver ?</Button>
                </div>
                <textarea
                  className="form-control"
                  id="descProblema"
                  rows="2"
                  disabled
                  value={problema.descricao}
                ></textarea>
              </div>
              <div className="form-group col-lg-15">
                <label htmlFor="descSolucao">Proposta de Solucao</label>
                <textarea
                  className="form-control"
                  id="descSolucao"
                  rows="3"
                  value={buscarDescricaoIdeia(problema.IdProblema)}
                  disabled
                ></textarea>
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
}
