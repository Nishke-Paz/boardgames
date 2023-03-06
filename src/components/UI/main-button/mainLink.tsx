import React from 'react'
import { Link } from 'react-router-dom'
import classes from './mainLink.module.css'

export enum TypeLink {
  createGame = 'createGame',
  connectToGame= 'connectToGame'
}

type PropsMainLink = {
  type: string;
  children: React.ReactNode;
}

const MainLink: React.FC<PropsMainLink> = ({type, children}) => {
  return (
    <Link to={`/${type}`} className={classes.mainLink}>{children}</Link>
  )
}

export default MainLink;
