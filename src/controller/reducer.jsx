import { ADD_CART, REMOVE_ITEM, REMOVE } from './type'

const initialState={
    cart:[],
}

// reducer
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:

        return{
            ...state,
            cart:[...state.cart]
        } 
            
    
        default:
            return state
    }
}