import React, { Component } from 'react'
import axios from '../../axios-orders'
import CheckoutOrder from './CheckoutOrder/CheckoutOrder'
import TotalCard from './TotalCard/TotalCard'
import classes from './Checkout.module.sass'
import { connect, dispatch } from 'react-redux'
import * as types from '../../store/types'


class Checkout extends Component{
    _isMounted = false
    state = {
        orders: null
    }

    componentDidMount(){
        this._isMounted = true
        axios.get('/orders.json')
            .then(response => {
                if(this._isMounted){
                    this.setState({orders: response.data?response.data:null})}
                })
            .catch(error => console.log('error', error))
    }
    componentWillMount(){
        this._isMounted = false
    }

    printOrders = () => {
        let orders
        if(this.state.orders !== null){
            orders = Object.keys(this.state.orders).map(order =>(
                <CheckoutOrder ingredients={this.state.orders[order].ingredients}
                    price={this.state.orders[order].order.price}
                    edit={() => this.handleEdit(this.state.orders[order], order)}
                    delete={() => this.handleDelete(order)}
                />
            ))
        }
        return orders
    }

    handleEdit = (order, orderID) => { //Cambiar cuando redux porque esto es una locura
        console.log(order)
        this.props.setCurrent(order.ingredients, order.order.price)
        this.handleDelete(orderID)
        this.props.history.push('/burger')
        
    }
    handleDelete = (orderID) => {
        console.log('orderID', orderID)
        axios.delete(`/orders/${orderID}.json`)
            .then(() => {
                this.setState(prevState => {
                    const newOrders = {...prevState.orders}
                    delete newOrders[orderID]
                    return {orders: newOrders}
                })
            })
            .catch(err => console.log('edit err', err))
    }
    handleAdd = () => this.props.history.push('/burger')
    handleContinue = () => this.props.history.push('/form')
 

    totalPrice = () => {
        if(this.state.orders !== null){
            let tPrice = 0
            for (let order in this.state.orders){
                tPrice += this.state.orders[order].order.price
            }
            console.log('tpirce', tPrice)
            return tPrice
        }
    }

    render(){
        
        const lprint = this.printOrders()
        return (
            <>
                <div className={classes.orders}>
                    {lprint}
                </div>
                <TotalCard 
                    quantity={this.state.orders?Object.keys(this.state.orders).length:null}
                    tPrice={this.totalPrice()} 
                    className={classes.TotalCard}
                    add={this.handleAdd}
                    continue={this.handleContinue}
                />
            </>
        )


        }

   
}

const mapActions = (dispatch) => {
    return{
        setCurrent: (ingredients, totalCost) => dispatch({type: types.SET_CURRENT, 
                                                data: {ingredients: ingredients, totalCost: totalCost}})
    }
}

export default connect(null, mapActions)(Checkout)
