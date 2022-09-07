import { createContext, useContext, useState } from "react";

const loginContext = createContext()

function LoginProvider({ children }) {
    const [user, setUser] = useState({})
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { user, setUser }
    return <loginContext.Provider value={value}>{children}</loginContext.Provider>
}

function useLogin() {
    const context = useContext(loginContext)
    if (context === undefined) {
        throw new Error('useLogin must be used within a LoginProvider')
    }
    return context
}
export { LoginProvider, useLogin }