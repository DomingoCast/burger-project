import React from 'react'
import Aux from '../../../hoc/Aux'

const checkoutText = (props) => {
    const items = Object.keys(props.ingredients).map(lKey =>{
        const quantity = props.ingredients[lKey]
        const price = quantity*props.price[lKey]
        return(
            <li>{lKey}: x{props.ingredients[lKey]} = ${price}</li>
        )})
    console.log(items)
    console.log(props.tCost, props.price)
    return(
        <Aux>
            <span> Your checkout is: </span>
            <ul>
                {items}
            </ul>
            <hr/>
            <span>Total: $ {props.tCost}</span>
        </Aux>
    )
}

export default checkoutText
