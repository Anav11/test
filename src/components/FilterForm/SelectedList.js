import React from 'react';

export function SelectedList({ dispatch, state }) {
    return (
        <ul className="selected-list">
            {
            state.selectedValue.map((city) => {
                return (
                    <div className="selected-list__chip" key={city.id} style={{display:"flex"}}>
                        <li  className="selected-list__chip__city" title={city.name}>
                            {city.name}
                        </li>
                        <i onClick={() => dispatch({type: 'delete', payload: city.id})} className="selected-list__chip__delete-button">&#10008;</i>
                    </div>
                )
            })
            }
        </ul>
    );
}
