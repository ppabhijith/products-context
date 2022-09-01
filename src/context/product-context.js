import { createContext, useReducer, useContext } from "react";

const productContext = createContext()

function productReducer(state, action) {
    switch (action.type) {
        case 'LOAD_PRODUCT': {
            console.log("context", action.payload)
            return { ...state, products: action.payload }
        }
        case 'ADD_TO_CART': {
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        }
        case 'REMOVE_FROM_CART': {
            return { ...state, cart: state.cart.filter((product) => product.id !== action.payload) }
        }
        case 'CHANGE_QUANTITY': {
            return { ...state, cart: state.cart.filter(item => item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty) }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }

    }
}

function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(productReducer, { products: [], cart: [] })
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch }
    return <productContext.Provider value={value}>{children}</productContext.Provider>
}

function useProduct() {
    const context = useContext(productContext)
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider')
    }
    return context
}
export { ProductProvider, useProduct }