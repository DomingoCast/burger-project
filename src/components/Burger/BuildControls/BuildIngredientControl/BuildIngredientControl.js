import React from 'react'

const buildIngredientControl = (props) => {
    let delButton = <button onClick={props.click}>-</button>
    if (!props.enabler[props.type]){
         delButton = <button onClick={props.click} disabled>-</button>
    }

    return(
        <div className={props.type}>
            <span>{props.type}</span>
            <button onClick={props.click}>+</button>
            {delButton}
        </div>
)
}

export default buildIngredientControl
