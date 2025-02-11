import { useReducer } from 'react'

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            if (state.count < 1) return state
            return { count: state.count - 1 }
        default:
            return state
    }
}

export const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, { count: 0 })
    return (
        <div className='flex items-center justify-center gap-2 border-2 rounded-lg p-2 text-lg'>
            <button
                aria-describedby="decrease"
                className='border border-gray-300 px-3 py-1 rounded-lg cursor-pointer'
                onClick={() => dispatch({ type: 'decrement' })}
            >-</button>
            <p id='decrease' className='sr-only'>Decrease button</p>
            <span>{state.count}</span>
            <button
                className='border border-gray-300 px-3 py-1 rounded-lg cursor-pointer'
                onClick={() => dispatch({ type: 'increment' })}
            >+</button>

        </div>
    )
}
