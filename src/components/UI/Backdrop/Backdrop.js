import React from 'react'
import classes from './Backdrop.module.sass'
const backdrop = (props) => {
    let style
    if(props.display){
        style = {display: 'block',
            //background: props.color,
            background: props.color,
        }

    }else{
        style = {display: 'none'}
    }
    console.log('estilaso', style)
    return(
    <div style={style} onClick={props.click} className={classes.Backdrop}></div>
)}

export default backdrop
