import { createContext } from "react"

export default function stateReducer (currentState, action) {
    switch (action.type) {

        case "setToken": {
            localStorage.setItem("token", action.data.jwt)
            return {
                ...currentState,
                token: action.data.jwt
            }            
        }
        
        default:
            return currentState
    }
}

export const stateContext = createContext()