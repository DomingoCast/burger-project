import React from 'react'
import Burger from '../../../components/Burger/BurgerVanilla/BurgerVanilla'
import PairButtons from '../../../components/UI/PairButtons/PairButtons'

import classes from './CheckoutOrder.module.sass'

const checkoutOrder = (props) =>{ 
    let ingredients
    if (props.ingredients){
        ingredients = Object.keys(props.ingredients).map(ingredient => (
            <span className={classes.ingredient} key={ingredient}>{ingredient} 
            <span className={classes.x}> x</span>
            {props.ingredients[ingredient]}</span>
        ))
    }else{
        ingredients = <p>hola</p>
    }
    const style = {
        fontWeight: "400",
        fontSize: "2.5rem",
        letterSpacing: ".3rem",

    }
        
    //return <p> adios </p>
    return (
        <div className={classes.higherOrder}>
            <div className={classes.order}>
                <div className={classes.burgerContainer}>
                    <Burger ingredients={props.ingredients}/>
                </div>
                <div className={classes.ingredients}>
                    {ingredients}
                </div>
                <div className={classes.buttons}>
                    <PairButtons url1="#"  btn1="edit"   click1={props.edit}
                                 url2="#"  btn2="remove" click2={props.delete}
                    >
                        <span style={style} className={classes.textPrice}>${props.price}</span>
                    </PairButtons>
                </div>
            </div>
                <div className={classes.price}>
                    <span className={classes.textPrice}>${props.price}</span>
                </div>
            </div>
    )


    
}

export default checkoutOrder
