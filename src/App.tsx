import React from 'react';
import Filter from "./components/Filter";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Layout from "./components/Layout";

import {useFilter} from "./hooks/useFilter";



const App: React.FC = () => {
    const {changeFilterHandler, changeSortHandler, todos} = useFilter()
    return (
        <Layout>
            <AddTodo />
            <hr className="my-4"/>
            <Filter
                changeSortHandler={changeSortHandler}
                changeFilterHandler={changeFilterHandler}
            />
            <TodoList todos={todos}/>
        </Layout>
    );
}

export default App;

