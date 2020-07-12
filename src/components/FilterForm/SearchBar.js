import React from 'react';

export function SearchBar({ dispatch, state, dataBase }) {

    function changeHandler(event) {
        dispatch({type: 'changeInput', payload: event.target.value})
    }

    function getMatchedCity(city) {
        return (
            (city.name.toLowerCase().indexOf(state.inputValue.toLowerCase()) !== -1) &&
            !state.selectedValue.some(selectedCity => selectedCity.id === city.id)
        ) ?
            <div key={city.id}
                 onClick={() => dispatch({type: 'add', payload: city})}
                 className="search-bar__drop-down-list__city"
                 title={city.name}
            >
                {city.name}
            </div>
        :
            null
    }

    return (
        <div className="search-bar">
            <h2>Введите город:</h2>
            <input className="search-bar__input"
                   list="cities"
                   type="text"
                   onChange={changeHandler}
                   value={state.inputValue}
            />
            <div className="search-bar__drop-down-list">
                {
                (state.inputValue.length > 2) ?
                    dataBase.map((city) => getMatchedCity(city)) : null
                }
            </div>
        </div>
    );
}
