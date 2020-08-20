import React from 'react'
import Modal from 'react-modal'
import css from './modalComment.module.css'
import Button from 'react-bootstrap/Button'

Modal.setAppElement('#root');

export default function ModalComment({handleCloseCommentClick}) {
  const handleClickClose = () => {
    handleCloseCommentClick()
  }

  return (
    <div >
      <Modal isOpen={true} className={css.container_modal}>
        <div className={css.row}> 
        <span>Comentarios</span> <a onClick={handleClickClose} className={css.close}>X</a>
        </div>
        <div className={`${css.comments} form-group col-lg-15`}>
          <textarea
            className="form-control"
            id="comments"
            rows="3"
          ></textarea>
          <Button className={css.btn_publicar}>Publicar</Button>
          </div>
      </Modal>
    </div>
  )
}
