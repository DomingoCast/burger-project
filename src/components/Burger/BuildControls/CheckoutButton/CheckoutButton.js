import React from 'react'
import classes from './CheckoutButton.module.sass'
const checkoutButton = (props) => {
    let aClass = `${classes.Checkout}`
    let clicked = props.click
    if (props.checkout){
        aClass += ` ${classes.disabled}`
        clicked = null
    }
    return(
        <a onClick={clicked} href="#" className={aClass}>
            <span className={classes.BText}>checkout</span> 
            <div className={classes.barra}></div>
        </a>
)
        

}
export default checkoutButton

