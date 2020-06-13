import React from 'react'
import BuildIngredientControl from './BuildIngredientControl/BuildIngredientControl'
import CheckoutButton from './CheckoutButton/CheckoutButton'
import TotalCost from '../TotalCost/TotalCost'
import classes from './BuildControls.module.sass'
import Aux from '../../../hoc/Aux'

const buildControls = (props) => {
    const ingredients = ['salad', 'cheese', 'meat' ]
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
        <Aux>
            <div className={classes.CheckoutControlsMobile}>
                <TotalCost value={props.tCost}/>
                <div className={classes.vl}></div>
                <CheckoutButton click={props.checkCheckout}checkout={props.checkout}/>
            </div>
            <div className={classes.BuildControls}>
                <div className={classes.IngredientControls}>
                    {controls}
                </div>
                <div className={classes.CheckoutControls}>
                    <TotalCost value={props.tCost}/>
                    <div className={classes.vl}></div>
                    <CheckoutButton click={props.checkCheckout}checkout={props.checkout}/>
                </div>
            </div>
        </Aux>
    )}

export default buildControls
