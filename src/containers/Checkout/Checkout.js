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
        orders: null,
        scroll: null
    }

    componentWillMount(){
        this._isMounted = false
    }

    componentDidMount(){
        this._isMounted = true
        axios.get('/orders.json')
            .then(response => {
                if(this._isMounted){
                    this.setState({orders: response.data?response.data:null})}
                })
            .catch(error => console.log('error', error))
        
        const elements = document.querySelector('#elements')
        this.handleScroll() //check overflow of element once it is mounted

    }
    componentDidUpdate(){
        this.handleScroll() //check overflow of element when delete

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

    handleEdit = (order, orderID) => { //Cambiar cuando redux porque esto e:s una locura
        this.props.setCurrent(order.ingredients, order.order.price)
        this.handleDelete(orderID)
        this.props.history.push('/burger')
        
    }
    handleDelete = (orderID) => {
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
    
    handleScroll = () => {
        const element = document.querySelector('#orderList')
        let scrollClass
        //console.log('[heights]', element.scrollHeight - element.scrollTop, element.clientHeight)
        if (element.scrollHeight === element.clientHeight){
            if(this.state.scroll !== null){
            this.setState({scroll: null })
            }
        }else if(element.scrollTop === 0){
            if(this.state.scroll !== classes.scrollTop){
                this.setState({scroll: classes.scrollTop })
            }
        }else if(Math.round(element.scrollHeight - element.scrollTop) === element.clientHeight){
            if(this.state.scroll !== classes.scrollBottom){
                this.setState({scroll: classes.scrollBottom })
            }
        }else if(element.clientHeight ){
            if(this.state.scroll !== classes.scrollMiddle){
                this.setState({scroll: classes.scrollMiddle })
            }
        }
    }

 

    totalPrice = () => {
        if(this.state.orders !== null){
            let tPrice = 0
            for (let order in this.state.orders){
                tPrice += this.state.orders[order].order.price
            }
            return tPrice.toFixed(2)
        }
    }

    render(){
        let vh = window.innerHeight * 0.01;
        //console.log('[vh]', vh)
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        })
        const lprint = this.printOrders()
        return (
            <>
                <div id="orderList" onScroll={this.handleScroll} className={`${this.state.scroll} ${classes.orders}`}>
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
