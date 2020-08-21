import React, { useState } from 'react'
import Header from './Header'
import Card from './Card'
import ModalDor from './ModalDor';

export default function Home() {
  const [isModalDorOpen, setIsModalOpenDor] = useState(false)
  const [problem, setProblem] = useState({})
  const [ideia, setIdeia] = useState({})

  const handleClickOpenModalDor = () => {
    setIsModalOpenDor(true)
  }

  const handlePublish = (problem, ideia) => {
    setProblem(problem)
    setIdeia(ideia)
  }

  return (
    <div>
      <Header handleClickOpenModalDor={handleClickOpenModalDor} />
      <Card problem={problem} ideia={ideia}/>
      {isModalDorOpen && <ModalDor setIsModalOpenDor={setIsModalOpenDor} onPublish={handlePublish}/>}
    </div>
  )
}
