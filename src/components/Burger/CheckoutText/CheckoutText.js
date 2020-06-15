import React from 'react'
//import Aux from '../../../hoc/Aux'
import classes from './CheckoutText.module.sass'

const checkoutText = (props) => {
    const items = Object.keys(props.ingredients).map(lKey =>{
        const quantity = props.ingredients[lKey]
        const price = quantity*props.price[lKey]
        return(
            <div className={classes.row}>
                <span className={classes.ingredient}>{lKey}</span>
                <span className={classes.quantity}>x{props.ingredients[lKey]}</span>
            </div>
        )})
    return(
        <div className={classes.bigContainer}>
            <span className={classes.checkout}> Checkout</span>
            <div className={classes.hr}></div>
            <div className={classes.rowContainer}>
                {items}
            </div>
            <div className={classes.controls}>
                <span className={classes.price}>T.price: ${props.tCost}</span>
                <a href="#" onClick={props.buy} className={classes.buy}>Buy</a>
            </div>
        </div>
    )
}

export default checkoutText
