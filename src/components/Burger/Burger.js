import React from 'react'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './Burger.module.css'

const burger = (props) => {

    let transformIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, index) =>
                    <BurgerIngredient key={igKey+index} type={igKey} />
                )
            }
        )

        transformIngredient = transformIngredient.reduce(
        (arr, el) => {
            return arr.concat(el)
        }
    )

    if (transformIngredient.length === 0) {
        transformIngredient = <p>nothing ingredient</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformIngredient}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger