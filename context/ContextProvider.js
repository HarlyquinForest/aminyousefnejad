import { createContext, useContext, useState, useEffect } from 'react'
const StateContext = createContext({ ContextProvider: () => {} })

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(0)
    const [mobile, setMobile] = useState(false)
    return (
        <StateContext.Provider
            value={{ screenSize, setScreenSize, mobile, setMobile }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
