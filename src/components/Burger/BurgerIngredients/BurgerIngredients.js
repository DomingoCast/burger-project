import React from 'react'
import classes from './BurgerIngredients.module.css'
import propTypes from 'prop-types'

const burgerIngredients = (props) => {
    let ingredient = null

    switch(props.type){
        case('bread-top'):
            ingredient = <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                </div>
            break
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break
        case('meat'):
            ingredient = <div className={classes.Meat}></div>
            break
        case('cheese'):
            //console.log('yo mama')
            ingredient = <div className={classes.Cheese}></div>
            break
        case('salad'):
            ingredient = <div className={classes.Salad}></div>
            break
        default:
            ingredient = null
    }
    //console.log(ingredient)
    return ingredient
}

burgerIngredients.propTypes = {
    type: propTypes.string.isRequired
}

export default burgerIngredients
