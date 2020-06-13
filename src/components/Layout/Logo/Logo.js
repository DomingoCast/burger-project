import React from 'react'
import classes from './Logo.module.sass'
import mascarilla from '../../../assets/BURGER.png'

const logo = (props) => (
    <div className={classes.marco}>
        <img className={classes.mascarilla}src={mascarilla} alt="mascarilla"/>
    </div>
)

export default logo
