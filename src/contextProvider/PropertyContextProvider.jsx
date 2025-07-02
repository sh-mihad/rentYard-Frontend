import { useReducer } from 'react'
import { PropertyContext } from '../contexts'
import { propertyInitialState, propertyTypeReduces } from '../reducers/propertyTypeReduces'

export default function PropertyContextProvider({children}) {
    const [propertyState,dispatch]= useReducer(propertyTypeReduces,propertyInitialState)
  return (
    <PropertyContext.Provider value={{propertyState,dispatch}}>
        {children}
    </PropertyContext.Provider>
  )
}
