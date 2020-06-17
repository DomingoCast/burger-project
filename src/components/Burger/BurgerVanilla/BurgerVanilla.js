
import React from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import sortIngredients from '../sortIngredients'
//import Aux from '../../hoc/Aux'

//const style = {
    //height: '100px',
    //width : '100px',
    //border: '3px solid black'
//}


const burger = (props) => {
    let ingredientList = []
    const ingredients = sortIngredients(props.ingredients)
    for (let [ingredient, times] of Object.entries(ingredients)) {
        for (let i = 0; i<times; i++){
            ingredientList.push(
                <BurgerIngredients key={ingredient+i}type={ingredient}/>
            )
        }
    }
    //if(ingredientList.length === 0){
        //ingredientList = <div className={classes.fill}>Fill your burger</div>
    //}
    return(
        <>
            <BurgerIngredients type='bread-top'/>
                {ingredientList}
            <BurgerIngredients type='bread-bottom'/>
        </>
    )
    
}

export default burger
