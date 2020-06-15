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
class BurgerBuilder extends Component{
    state = {
        ingredients: null,
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
    }
    componentDidMount(){
        axios.get('/ingredients.json')
            .then(response => this.setState({ingredients: response.data, loading: false}))
            .catch(error => {
                this.setState({
                    loading: false
                })
                
                console.log(error)
            })
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
    handleBuy = () => {
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
            order: 'fast',
        }
        axios.post('/orders.json', data) 
            .then(()=>{
                this.setState({loading: false})
                this.modalOut()})
            .catch(error => {
                this.setState({loading: false})
                this.modalOut()
                console.log(error)

            })               

            
    }
    modalInsides = () => {

        if(this.state.loading){
            return <Loading/>
        }else{
                return(<CheckoutText 
            buy={this.handleBuy}
            ingredients={{...this.state.ingredients}}
            price={{...this.state.prices}}
            tCost={this.state.totalCost}
            />)
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

export default withErrorHandler(BurgerBuilder, axios)
