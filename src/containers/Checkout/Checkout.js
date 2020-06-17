import React, { Component } from 'react'
import axios from '../../axios-orders'
import CheckoutOrder from './CheckoutOrder/CheckoutOrder'
import TotalCard from './TotalCard/TotalCard'
import classes from './Checkout.module.sass'


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

    printOrders = ()=>{
        let orders
        if(this.state.orders !== null){
            orders = Object.keys(this.state.orders).map(order =>(
                <CheckoutOrder ingredients={this.state.orders[order].ingredients}
                                price={this.state.orders[order].order.price}/>
            ))
        }
        return orders
    }

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
                />
            </>
        )


        }

   
}



export default Checkout
