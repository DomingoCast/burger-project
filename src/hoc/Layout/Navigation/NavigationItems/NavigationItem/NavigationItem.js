import React from 'react'
import classes from './NavigationItem.module.sass'
import {Link} from 'react-router-dom'
const navigationItem = (props) => {

    let item
    const splited = props.children.split(' ')
    if (props.children.split(' ').length>1){
        item=(
            <span className={classes.double}>
                <div className={classes.text}>{splited[0]}</div>
                <div className={props.secondWord?`${classes.text} ${classes.secondWord}`:classes.text}>{splited[1]}</div>
            </span>
        )
    }else{
        item = (
            <span className={classes.text}>{props.children}</span>
        )
    }
    let lclass = classes.desktop
    if(props.mobile){
        lclass= classes.mobile
    }
    return(
        <div className={lclass}>
            <Link onClick={props.click} to={props.url} className={classes.button}>
                <div className={classes.block}></div>
                {item}
            </Link>
        </div>
    )

}

export default navigationItem
