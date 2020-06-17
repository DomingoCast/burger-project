import React from 'react'
import classes from './PairButtons.module.sass'
import {Link} from 'react-router-dom'

const pairButtons = (props) => {
    let btn1
    let btn2
    console.log(props)
    
    switch(props.btn1){
        case 'add':
            btn1 = (
                <Link style={{textDecoration: 'none'}}className={classes.link} to={props.url1}>
                    <div className={`${classes.btn} ${classes.btn__add}`}>
                        <span className={classes.btn__text}>+</span>
                    </div>
                </Link>
            )
            break
        case 'edit':
            btn1 = (
                <Link style={{textDecoration: 'none'}}className={classes.link} to={props.url1}>
                    <div className={`${classes.btn} ${classes.btn__edit}`}>
                        <span className={classes.btn__text}>e</span>
                    </div>
                </Link>
            )
            break
    }
    switch(props.btn2){
        case 'continue':
            btn2 = (
                <Link style={{textDecoration: 'none'}} className={classes.link} to={props.url2}>
                    <div className={`${classes.btn} ${classes.btn__continue}`}>
                        <span className={classes.btn__text}>&rarr;</span>
                    </div>
                </Link>
            )
            break
        case 'remove':
            btn2 = (
                <Link style={{textDecoration: 'none'}} className={classes.link} to={props.url2}>
                    <div className={`${classes.btn} ${classes.btn__remove}`}>
                        <span className={classes.btn__text}>x</span>
                    </div>
                </Link>
            )
            break
    }
    
    
    return(
        <div className={classes.container}>
            {btn1}
            {btn2}
        </div>

    )
}

export default pairButtons
