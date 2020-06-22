import React from 'react'
import classes from './TotalCard.module.sass'
import PairButtons from '../../../components/UI/PairButtons/PairButtons'

const checkoutOrder = (props) =>{ 
        
    let buttons = (
        <PairButtons url1="#" btn1="add" click1={props.add}
                     url2="#" btn2="continue" click2={props.continue}
        >
            <span className={classes.textPrice}>${props.tPrice}</span>
        </PairButtons>
    ) 
    let formClass = null
    if (props.type === "form"){
        formClass = classes.form
        buttons = (
            <PairButtons url1="#" btn1="back" click1={props.back}
                         url2="#" btn2="continue2" click2={props.continue}
            >
                <span className={classes.textPrice}>${props.tPrice}</span>
            </PairButtons>

        )
        

    }

    return (
        <div className={classes.higherOrder}>
            <div className={classes.order}>
                <div className={classes.burgers}>
                    Burgers <span className={classes.x}>x{props.quantity}</span>
                </div>
                <div className={classes.buttons}>
                    {buttons}
                </div>
            </div>
                <div className={`${classes.price} ${ formClass }`}>
                    <span className={classes.textPrice}>${props.tPrice}</span>
                </div>
            </div>
    )


    
}

export default checkoutOrder
