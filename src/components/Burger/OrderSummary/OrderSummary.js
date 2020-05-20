import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

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
            <ul>{ingredientSummary}</ul>
            <p><strong>total price: {props.price.toFixed(2)}</strong></p>
            <p>continue checkout</p>
            <Button clicked={props.cancel} btnType={"Danger"}>CANCEL</Button>
            <Button clicked={props.continue} btnType={"Success"}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary
