import React from 'react'
import classes from './Modal.module.sass'

const modal = React.memo((props) => {
    let style
    if(props.display){
        style = {display: 'flex'}
    }else{
        style = {display: 'none'}
    }
   
    return(
    <div style={style} className={classes.Modal}>{props.children}</div>
    )
})

export default modal
