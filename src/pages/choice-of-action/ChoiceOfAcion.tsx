import React from 'react'
import MainLink, { TypeLink } from '../../components/UI/main-button/mainLink'

 const ChoiceOfAcion: React.FC = () => {
  return (
    <>
        <MainLink type={TypeLink.createGame}>Создать игру</MainLink>
        <MainLink type={TypeLink.connectToGame}>Присоединиться к игре</MainLink>
    </>
  )
}

export default ChoiceOfAcion
