import React from 'react'
import classes from './Header.module.css'
import logo from ".//domino.png"

export default function Header() {
  return (
    <>
        <header className={classes.header}>
          <img width='32px' height='32px' alt='картинка' src={logo} className={classes.img}/>
          <h1 className={classes.h1}>Настольные игры</h1> 
          <a className={classes.sigIn}>Войти</a>
        </header>
    </>
  )
}
