import React from 'react'
import BuildIngredientControl from './BuildIngredientControl/BuildIngredientControl'
import CheckoutButton from './CheckoutButton/CheckoutButton'

const buildControls = (props) => {
    const ingredients = ['salad', 'meat', 'cheese']
    const controls = ingredients.map(
        ingredient => ( 
            <BuildIngredientControl 
            click = {props.click}
            key={ingredient} 
            type={ingredient}
            enabler={props.enabler}/>
        )
    )
    //console.log(props.checkout)
    
    return(
    <div>
        {controls}
        <CheckoutButton click={props.checkCheckout}checkout={props.checkout}/>
    </div>
    )}

export default buildControls
