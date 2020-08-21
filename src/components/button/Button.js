import React from 'react'
import css from './button.module.css'

export default function Button({children, onClick}) {
  const handleClick = () => {
    onClick()
  }

  return (
      <button className={css.btn_resolver} onClick={handleClick}>{children}</button>
  )
}
