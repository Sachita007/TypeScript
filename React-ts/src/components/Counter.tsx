import { useReducer } from 'react'

type StateTypes = {
    count: number
}


type UpdateAction = {
    type: "increment" | "decrement",  // This is string template  types
    playload: number
}

type ResetAction = {
    type: "reset"
}

type ActionTypes = UpdateAction | ResetAction // This is called discriminated unions


// type ActionTypes = {
//     type: string,
//     playload: number
// }

const Counter = () => {

    const initialState = { count: 0 }

    function reducer(state: StateTypes, action: ActionTypes) {
        switch (action.type) {
            case "increment":
                return { count: state.count + action.playload }
            case "decrement":
                return { count: state.count - action.playload }
            case "reset":
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>Counter {state.count}
            <button onClick={() => dispatch({ type: "increment", playload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "decrement", playload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: "reset" })}>Decrement 10</button>
        </div>
    )
}

export default Counter