import React from 'react'
import styles from './square.module.css'

const Square = (props) => {
    // Lift up state here
    return (
        <button className='qua'  onClick={props.handlePlay}>{props.value}</button>
      )
}

export default Square;