import { ADD_CART, REMOVE_ITEM, REMOVE } from './type'

export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item,
    }
}

export const DETETE = (item) => {
    return {
        type: REMOVE,
        payload: item,
    }
}

export const REMOVE_INT = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item,
    }
}