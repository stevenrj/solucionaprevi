import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import css from './modalComment.module.css';
import Button from 'react-bootstrap/Button';
import * as api from '../api/apiService';

Modal.setAppElement('#root');

export default function ModalComment({ handleCloseCommentClick, idProblema }) {
  const [comments, setComments] = useState([]);
  const [commentUser, setCommentUser] = useState('')

  const handleClickClose = () => {
    handleCloseCommentClick();
  };

  const handleCommentUser = (event) => {
    setCommentUser(event.target.value);
  };

  useEffect(() => {
    if (comments) {
      const getComments = async () => {
        const allComments = await api.getAllComentarios();
        console.log('idproblema', idProblema);
        const filteredComments = allComments.filter(
          (comment) => comment.FkProblema === idProblema
        );
        console.log('comments', filteredComments);
        setComments(filteredComments);
      };
      getComments();
    }
  }, []);

  const handlePublicar = async () => {
    console.log('desc', commentUser);
    const comentario = {
      descricao: commentUser,
      FkProblema: idProblema,
      FkUsuario: 15,
      datacomentario: null,
      horacomentario: null,
      isProposta: false
    };

    const insertComentario = await api.insertComentario(comentario);
    setComments([...comments, comentario])
  };

  return (
    <div>
      <Modal isOpen={true} className={css.container_modal}>
        <div className={css.row}>
          <span>Comentarios</span>{' '}
          <a onClick={handleClickClose} className={css.close}>
            X
          </a>
        </div>
        {comments &&
          comments.map((comment) => (
            <div
              key={comment.IdComentario}
              className={`${css.comments} form-group col-lg-15`}
            >
              <textarea
                className="form-control"
                id="comments"
                rows="3"
                value={comment.descricao}
                disabled
              ></textarea>

              
            </div>
          ))}
          
          <textarea
                className="form-control"
                id="commentsUser"
                rows="3"
                value={commentUser}
                onChange={handleCommentUser}
              ></textarea>

              <Button className={css.btn_publicar} onClick={handlePublicar}>Publicar</Button>
              
      </Modal>
    </div>
  );
}
