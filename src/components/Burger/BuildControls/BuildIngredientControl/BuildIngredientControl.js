import React from 'react'
import classes from './BuildIngredientControl.module.sass'

const buildIngredientControl = (props) => {
    //let delButton = <button onClick={props.click}>-</button>
    const addClass = `${classes.btn} ${classes.btn__add} ${classes['btn__'+ props.type]}`
    let delClass = `${classes.btn} ${classes.btn__delete} ${classes['btn__'+ props.type]}`
    let style2
    if (!props.enabler[props.type]){
        //console.log('smt')
        //console.log(delClass)
        delClass.concat(`  ${classes.btnDisabled}`)
        style2={background:'#aaa'}
        //console.log(delClass)
         //delButton = <button onClick={props.click} disabled>-</button>
    }
    
    const style = {
        ////display: "inline-block",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "3rem",
        letterSpacing: "0.5rem",
        width: "80%",
        margin: "auto",
        width: "80%",
        //verticalAlign: "top"

    }
    return(
        //<div style={style} className={props.type}>
            //{delButton}
            //<span>{props.type}</span>
            //<button onClick={props.click}>+</button>
        //</div>
        <div style={style} className={props.type}>
                <a onClick={props.click} href="#" className={delClass}>
                    <div style={style2} className={classes.circle}></div>
                    <span className={classes.minus}>-</span>
                </a>
                <span className={classes.ingredient}>{props.type}</span>
                <a onClick={props.click} href="#" className={addClass}>
                    <div className={classes.circle}></div>
                    <span className={classes.plus}>+</span>
                </a>
        </div>
)
}

export default buildIngredientControl
