import { useReducer } from 'react'
import { InformationContext } from '../contexts'
import { informationInitialState, informationReducers } from '../reducers/informationReducers'

export default function InformationProvider({ children }) {
    const [informationState, informationDispatch] = useReducer(informationReducers, informationInitialState)
    return (
        <InformationContext.Provider value={{ informationState, informationDispatch }}>
            {children}
        </InformationContext.Provider>
    )
}
