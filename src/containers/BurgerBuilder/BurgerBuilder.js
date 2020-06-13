import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import TotalCost from '../../components/Burger/TotalCost/TotalCost'
import Modal from '../../components/UI/Modal/Modal'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import CheckoutText from '../../components/Burger/CheckoutText/CheckoutText'
import classes from './BurgerBuilder.module.sass'

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:0,
            cheese:0,
            meat:0,
        },
        prices: {
            salad: 0.5,
            cheese: 0.7,
            meat: 1,
        },
        buttonEnabler:{
            salad: false,
            cheese: false,
            meat: false,
        },
        totalCost: 0,
        checkout: true,
        displayCheckout: false,
    }
    clicked = (e) => {
        //console.log('hola', e.target.parentNode.className)
        //console.log(Object.keys(this.state.ingredients))
        for(let ingredientName of Object.keys(this.state.ingredients)){
            const text = e.target.innerHTML
            if (e.target.parentNode.parentNode.className === ingredientName){
                this.setState((prevState, props) => {
                    const newIngredients = {...prevState.ingredients}
                    const newEnabler = {...prevState.buttonEnabler}
                    let newTCost = prevState.totalCost
                    let newCheckout = prevState.checkout
                    if (text === '+'){
                        newIngredients[ingredientName]++
                        newTCost += prevState.prices[ingredientName]
                        newEnabler[ingredientName] = true
                        newCheckout = false 
                    }else{
                        if(newIngredients[ingredientName]>0){
                            newIngredients[ingredientName]--
                            newTCost -= prevState.prices[ingredientName]
                            if(newIngredients[ingredientName] === 0){
                                newEnabler[ingredientName] = false
                                if(newTCost === 0){ //El nuevo coste calculado
                                    newCheckout = true 
                                }
                            }
                        
                        }
                    }
                    //console.log(newTCost, parseFloat(newTCost.toFixed(2)))
                    return ({
                        ingredients: newIngredients,
                        totalCost:parseFloat(newTCost.toFixed(2)),//redondear a dos decimales
                        buttonEnabler: newEnabler,
                        checkout: newCheckout,
                    })
                })
            }
        }
    }
    checkItOut = () => {
        this.setState({
            displayCheckout: true,
            checkout: false, //si se puede comprar pero queremos desabilitar el boton
        })
    }
    modalOut = () => {
        this.setState({
            displayCheckout: false,
        })
    }
    render(){
        //console.log(this.state.ingredients)
        return(
            <div className={classes.bigContainer}>
                <Modal display={this.state.displayCheckout}>
                    <CheckoutText 
                    ingredients={{...this.state.ingredients}}
                    price={{...this.state.prices}}
                    tCost={this.state.totalCost}
                    />
                </Modal>
                <Backdrop click={this.modalOut} display={this.state.displayCheckout} color={'rgba(255,255,255,0.6)'}/> 
                <Burger className={classes.BurgerContainer} ingredients = {this.state.ingredients}/>
                <BuildControls 
                className={classes.BuildControls}
                checkCheckout = {this.checkItOut}
                checkout={this.state.checkout} enabler={this.state.buttonEnabler}click= {this.clicked}
                tCost= {this.state.totalCost}
                />


            </div>
        )

    }

}

export default BurgerBuilder
