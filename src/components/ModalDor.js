import React, { useState } from 'react';
import Modal from 'react-modal';
import css from './modaldor.module.css';
import dragImg from '../assets/img/drag-drop-upload.gif';
import Button from './button/Button';
import Textarea from './textarea/Textarea';
import * as api from '../api/apiService';
import {getCurrentDate} from '../helpers/getCurrentDate'

Modal.setAppElement('#root');

export default function ModalDor({setIsModalOpenDor, onPublish}) {
  const [fileUpload, setFileUpload] = useState({ file: null });
  const [nomeDor, setNomeDor] = useState('');
  const [descricaoDor, setDescricaoDor] = useState('');
  const [palavrasChave, setPalavrasChave] = useState('');
  const [descricaoSolucao, setDescricaoSolucao] = useState('');

  const handleChangeNomeDor = (event) => {
    setNomeDor(event.target.value)
  }

  const handleUploadFile = (event) =>
    setFileUpload({ file: event.target.files[0] });

  const fazerUpload = (file) => {
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    console.log(formData);
    //return  post(url, formData, config)
  };

  const handleCancelar = () => {
    setIsModalOpenDor(false)
  }

  const publicar = async () => {
    fazerUpload(fileUpload);    

    const problema = {
      nome: nomeDor,
      fkUsuario: 11,
      descricao: descricaoDor,
      publicado: true
    }

    const insertProblema = await api.insertProblema(problema)
  
    const ideia = {
      FkProblema: insertProblema,
      descricao: descricaoSolucao,
      publicado: true,
      FkUsuario: null,
      dataIdeia: null,
      horaIdeia: "00:00:00.1234567"
    }

    const insertIdeia = await api.insertIdeia(ideia)
    onPublish(problema, ideia)
    setIsModalOpenDor(false)
    
  };

  return (
    <Modal isOpen={true} className={css.modal_dor}>
      <div className="container">
        <h2>Conte a sua dor</h2>

        <div className={css.group_img_input}>
          <img src={dragImg} alt="Imagem do usuario" className={css.img} />
          <div className={`custom-file ${css.input_file}`}>
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              name="customFile"
              accept="image/png, image/jpeg"
              onChange={handleUploadFile}
            />
            <label className="custom-file-label" htmlFor="customFile">
              Escolher arquivo
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputNome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="inputNome"
            placeholder="Pense em um nome para sua dor"
            value={nomeDor}
            onChange={handleChangeNomeDor}
          />
        </div>
        <Textarea rows={2} id={'descricaoDor'} onChange={setDescricaoDor}>
          Qual a sua dor ?
        </Textarea>
        <Textarea rows={1} id={'palavrasChave'} onChange={setPalavrasChave}>
          Digite palavras chave
        </Textarea>
        <Textarea rows={3} id={'descricaosolucao'} onChange={setDescricaoSolucao}>
          Proposta de Solucao
        </Textarea>

        <div className={css.btns}>
        <Button onClick={handleCancelar}>Cancelar</Button>
        <Button onClick={publicar}>Publicar</Button>
        </div>
        
      </div>
    </Modal>
  );
}
