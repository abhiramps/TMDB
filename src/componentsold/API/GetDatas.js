import React, { createContext, useReducer,useEffect } from 'react'
import axios from 'axios';
import Reducer from './Reducer';
const initialState = [];


export const contextData = createContext(initialState);

export const GetDatas = ( {children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    useEffect(() => {
       dispatch({type:'MOVIES'})
       return () => {
           
       }
   }, [])
  
    return (
        <contextData.Provider value={state}>
            {children}
        </contextData.Provider>
    )
}
