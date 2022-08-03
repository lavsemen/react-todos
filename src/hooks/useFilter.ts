import {useSelector} from "react-redux";
import {RootState} from "../store";
import React, {useMemo, useState} from "react";
import {TodoType} from "../types";
import {filterHandler, sortHandler} from "../utils/filter";


export const useFilter = () => {
    const store = useSelector((state: RootState) => state.todo);
    const [filter, setFilter] = useState({
        sort: '',
        filter: 'all'
    })
    const todos = useMemo(() => {
        return sortHandler(filter.sort,  filterHandler.bind(null, filter.filter, store.todos));
    }, [store.todos, filter]);

    const changeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(state => ({...state, filter: e.target.value}));
    }

    const changeSortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(state => ({...state, sort: e.target.value}));
    }

    return {
        todos,
        changeSortHandler,
        changeFilterHandler
    }
}