import React from 'react'
import classes from './TotalCard.module.sass'
import PairButtons from '../../../components/UI/PairButtons/PairButtons'

const checkoutOrder = (props) =>{ 
        
    //return <p> adios </p>
    return (
        <div className={classes.higherOrder}>
            <div className={classes.order}>
                <div className={classes.burgers}>
                    Burgers <span className={classes.x}>x{props.quantity}</span>
                </div>
                <div className={classes.buttons}>
                    <PairButtons url1="#" btn1="add" click1={props.add}
                                 url2="#" btn2="continue" click2={props.continue}
                    >
                        <span className={classes.textPrice}>${props.tPrice}</span>
                    </PairButtons>
                </div>
            </div>
                <div className={classes.price}>
                    <span className={classes.textPrice}>${props.tPrice}</span>
                </div>
            </div>
    )


    
}

export default checkoutOrder
