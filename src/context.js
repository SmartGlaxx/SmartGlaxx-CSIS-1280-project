import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
const AppContext = React.createContext()

const initialState ={
    background: "#000"
}
export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const changeColor =(value)=>{
        dispatch({type: "CHANGE_COLOR", payload: value})
    }
    return <AppContext.Provider value={{
        ...state, changeColor
    }}>
    {children}
    </AppContext.Provider>
}

export const UseAppContext=()=>{
    return React.useContext(AppContext)
}