import React from 'react'
import classes from './mainLink.module.css'

export default function MainLink(props: any) {
  return (
    <a className={classes.mainLink}>{props.value}</a>
  )
}
