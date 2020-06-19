import React, {Component} from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import TotalCost from '../../components/Burger/TotalCost/TotalCost'
import Modal from '../../components/UI/Modal/Modal'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import Loading from '../../components/UI/Loading/Loading'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import CheckoutText from '../../components/Burger/CheckoutText/CheckoutText'
import classes from './BurgerBuilder.module.sass'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {withRouter, Redirect} from 'react-router-dom'

import { connect, dispatch } from 'react-redux'
import * as types from '../../store/types'

class BurgerBuilder extends Component{
_isMounted = false
    state = {
        ingredients: null,
        totalCost: 0,
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
        checkout: true,
        displayCheckout: false,
        loading: false,
        error: false,
        cleanState:{
            ingredients: {
                salad: 0,
                cheese: 0,
                meat: 0
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
            loading: false,
            error: false,

        }
    }
    componentDidMount(){
        this._isMounted = true
        //axios.get('/ingredients.json')
            //.then(response => this._isMounted?this.setState({
                //ingredients: response.data[Object.keys(response.data)[0]],
                //loading: false
            //}):null)
            //.catch(error => {
                //if(this._isMounted){
                    //this.setState({
                        //loading: false,
                        //error: true,
                    //})
                //}
                
                //console.log(error)
            //})
        this.setState(this.props.updateBurger)
    }
    componentWillUnmount(){
        //console.log('hola?')
        this._isMounted = false
        this.props.setClean()

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
    handleBuy = (cRed) => {
        this.setState({
            loading: true
        })
        const data = {
            ingredients: this.state.ingredients,
            customer : {
                name: 'federico',
                email: 'federico@camela.es',
                phone: '69696969696420',
            },
            order: {
                delivery: 'fast',
                price: this.state.totalCost
                
            }
        }
        let redirect = () => this.setState(this.state.cleanState)
        if (cRed){
            redirect = () => this.props.history.push('/checkout')
        }
        axios.post('/orders.json', data) 
            .then(()=>{
                if (this._isMounted){
                    this.setState({loading: false})
                    this.modalOut()
                    redirect()
                }

            })
            .catch(error => {
                if (this._isMounted){
                    this.setState({loading: false})
                    this.modalOut()
                    console.log(error)
                    

            }})               

            
    }
    modalInsides = () => {

        if(this.state.loading){
            return <Loading/>
        }else{
            return(
                <CheckoutText 
                    buy={() => this.handleBuy(true)}
                    cart={() => this.handleBuy(false)}
                    ingredients={{...this.state.ingredients}}
                    price={{...this.state.prices}}
                    tCost={this.state.totalCost}
                />
            )
        }
    }
    burgerWhileLoading = () => {
        if(this.state.ingredients){
            return(
                <Aux>
                    <Burger className={classes.BurgerContainer} ingredients = {this.state.ingredients}/>
                    <BuildControls 
                    className={classes.BuildControls}
                    checkCheckout = {this.checkItOut}
                    checkout={this.state.checkout} enabler={this.state.buttonEnabler}click= {this.clicked}
                    tCost= {this.state.totalCost}
                    />
                </Aux>
            )
        }else{
            return <Modal display={true}><Loading/></Modal>
        }
    }
    render(){
        //console.log(this.state.ingredients)
        return(
            <div className={classes.bigContainer}>
                <Modal display={this.state.displayCheckout}>
                    {this.modalInsides()}
                </Modal>
                <Backdrop click={this.modalOut} display={this.state.displayCheckout} color={'rgba(255,255,255,0.6)'}/> 

                {this.burgerWhileLoading()}

            </div>
        )

    }

}
const mapState = (state) => {
    return {
        updateBurger: state.burgerState
    }
}

const mapActions = (dispatch) => {
    return{
        setClean: () => dispatch({type: types.SET_CLEAN})
    }
}

export default withErrorHandler(connect(mapState, mapActions)(BurgerBuilder), axios)
