import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Context } from '../reducer';
import { SearchBar } from './FilterForm/SearchBar';
import { SelectedList } from './FilterForm/SelectedList';
import './FilterForm/filterForm.css'

export function FilterForm({ data }) {
    const { dispatch, state } = useContext(Context);
    const [dataBase, setDataBase] = useState('');

    const getData = useCallback(async () => {
        setDataBase(await data);
    }, [data]);

    useEffect(() => {
        getData();
    }, [getData]);
    
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    }, [state]);

    return (
        dataBase.length ?
            <div>
                <SelectedList dispatch={dispatch} state={state} />
                <SearchBar dispatch={dispatch} state={state} dataBase={dataBase} />
            </div>
        : 
            <h2>Загрузка...</h2>
    );
}
