import React from 'react'
import classes from './TotalCard.module.sass'
import PairButtons from '../../../components/UI/PairButtons/PairButtons'

const checkoutOrder = (props) =>{ 
        
    //return <p> adios </p>
    return (
        <div className={classes.higherOrder}>
            <div className={classes.order}>
                <div className={classes.burgers}>
                    Burgers <span className={classes.x}>x</span>{props.quantity}
                </div>
                <div className={classes.buttons}>
                    <PairButtons url1="#" url2="#" btn1="add" btn2="continue"/>
                </div>
            </div>
                <div className={classes.price}>
                    <span className={classes.textPrice}>${props.tPrice}</span>
                </div>
            </div>
    )


    
}

export default checkoutOrder
