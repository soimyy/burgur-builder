import React from 'react'

import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredient).map(
        igKey => (
                <li key={igKey}>
                    <span style={{transform: 'capitalize'}}>
                        {igKey}
                    </span>
                    :{props.ingredient[igKey]}
                </li>
            )
        )

    return (
        <Aux>
            <h3>Your Order</h3>32
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>continue checkout
            </p>
        </Aux>
    )
}

export default OrderSummary
