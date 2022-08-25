import { createContext, useReducer, useContext } from "react";

const productContext = createContext()

function productReducer(state, action) {
    switch (action.type) {
        case 'LOAD_PRODUCT': {
            console.log('inside reducer')
            return { ...state, products: action.payload }
        }
        case 'ADD_TO_CART': {
            return { ...state, cart: [...state.cart, ...state.products.filter(product => product.id === action.payload)] }
        }
        case 'REMOVE_FROM_CART': {
            return { ...state, cart: [...state.cart.filter((product) => product.id !== action.payload)] }
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