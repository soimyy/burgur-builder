import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    // state
    state = {
        ingredient: {
            cheese: 0,
            meat: 0,
            salad: 0,
            bacon: 0,
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredient}/>
            </Aux>
        )
    }
}


export default BurgerBuilder;   