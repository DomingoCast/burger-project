import React from 'react'

const checkoutButton = (props) => {
    return(
        <button onClick={props.click} disabled={props.checkout}> checkout </button>
)

}
export default checkoutButton

