import React from "react";

export const Context = React.createContext();

const storage = JSON.parse(localStorage.getItem('state')) || {selectedValue: [], inputValue: ''};

export const initialState = {
    selectedValue: storage.selectedValue,
    inputValue: storage.inputValue
};

export const filterReducer = (state, action) => {
    switch(action.type) {
        case 'delete':
            const filtered = state.selectedValue.filter(city => city.id !== action.payload);
            return {
                selectedValue: filtered,
                inputValue: state.inputValue
            };
        case 'add':
            return {
                selectedValue: [...state.selectedValue, action.payload],
                inputValue: ''
            };
        case 'changeInput':
            return {
                selectedValue: state.selectedValue,
                inputValue: action.payload
            }
        default:
            throw new Error();
    }
};
