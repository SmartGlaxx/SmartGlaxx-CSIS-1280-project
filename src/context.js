import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
const AppContext = React.createContext()

const initialState ={
    backgroundC: "#0f0"
}
export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const changeColor =(color)=>{
        console.log(color)
        // dispatch({type: "CHANGE_COLOR", payload: color})
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