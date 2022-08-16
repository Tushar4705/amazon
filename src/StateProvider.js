// import * as React from 'react';
import React from 'react'
//setup data layout
//we need this to track the basket
import { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({initialState, reducer, Children}) =>(
    <StateContext.Provider value = {useReducer(initialState, reducer)}>
        {Children}
    </StateContext.Provider>
);
//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);