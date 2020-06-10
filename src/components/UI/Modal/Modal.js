import React from 'react'
import classes from './Modal.module.sass'

const modal = (props) => {
    let style
    if(props.display){
        style = {display: 'block'}
    }else{
        style = {display: 'none'}
    }
   
    return(
    <div style={style} className={classes.Modal}>{props.children}</div>
    )
}

export default modal
