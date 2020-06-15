import React from 'react'
import classes from './Loading.module.css'

const loading = (props) => (
    <div class={classes.container}>
        <div className={classes.loader}>Loading...</div>
    </div>
)

export default loading
