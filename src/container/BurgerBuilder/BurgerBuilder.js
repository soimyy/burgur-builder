import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.4,
    bacon: 0.7,
}

class BurgerBuilder extends Component {

    // state
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 0,
            bacon: 0,
        },

        totalPrice: 0,
        purchasable: false,
        purchasing: false,
    }

    // update
    updatePurchasable (ingredients) {

        const sum = Object.values(ingredients).reduce(
            (sum, num) => sum += num
        )

        this.setState({purchasable: sum > 0})
    }

    // add Handler
    addIngredientHandler = (type) => {

        // update ingredient
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount + 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount

        // update total price
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchasable(updateIngredients)
    }

    // remove Handler
    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return
        }
        const updateCount = oldCount - 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount

        // update total price
        const priceRemove = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceRemove
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})

        this.updatePurchasable(updateIngredients)
    }

    purchasingHandler = () => {
        this.setState({purchasing: true})
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing: false})
        console.log('clicked')
    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        }

        for (const key in disableInfo) {
            disableInfo[key] = disableInfo[key] <=0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    <OrderSummary ingredient={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disableInfo={disableInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchaing={this.purchasingHandler}
                />
            </Aux>
        )
    }
}


export default BurgerBuilder;   