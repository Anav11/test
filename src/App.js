import React, { useReducer } from 'react';
import { Context, initialState, filterReducer } from './reducer';
import { FilterForm } from './components/FilterForm';
import data from './data';

export default function App() {
    const [state, dispatch] = useReducer(filterReducer, initialState);

    return (
        <Context.Provider value={{dispatch, state}}>
            <FilterForm data={data}/>
        </Context.Provider>
    );
}
