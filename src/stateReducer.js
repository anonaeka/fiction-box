import { createContext } from "react"

export default function stateReducer (currentState, action) {
    switch (action.type) {

        case "setToken": {
            localStorage.setItem("token", action.data.token)
            return {
                ...currentState,
                token: action.data.token
            }            
        }
        
        default:
            return currentState
    }
}

export const stateContext = createContext()