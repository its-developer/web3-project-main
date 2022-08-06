const ADDTOCART = "ADDTOCART";

// Action creators
export const AddToCart = (productDetail) => ({
    type: ADDTOCART,
    payload: productDetail
})

// Initial state
const initialState = {
    CartItem: [],
    TotalProduct: 0,
    TotalPrice: 0
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            return {
                ...state,
                // counter: 1,
                CartItem: [...state.CartItem, action.payload],
                TotalProduct: state.TotalProduct + 1,
                TotalPrice: state.TotalPrice + Number(action.payload[0].productPrice)
            }
        default:
            return state
    }
}

export default rootReducer


