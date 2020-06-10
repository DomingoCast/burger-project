import React from 'react'

const totalCost = (props) => (
    <div>
        <span>Total cost: {props.value.toFixed(2)}</span>
    </div>
)

export default totalCost

