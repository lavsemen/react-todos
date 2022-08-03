import React, {useState} from 'react';
import TodoItem from './TodoItem'
import {TodoType} from "../types";
import {Pagination} from "./Pagination";


type Props = {
    todos: TodoType[]
}
const TodoList = ({ todos }: Props) => {
    const [page, setPage] = useState(1);
    const perPage = 5;
    const start = (page - 1) * perPage;
    const end = page * perPage;
    const currentTodos = todos.slice(start, end);
    const showPagination = todos.length > perPage;
    const countPages = Math.ceil(todos.length / perPage);

    const changePageHandler = (callback: Function) => {
        const newPage = callback(page);
        if (newPage >= 1 && newPage <= countPages) {
            setPage(newPage);
        }
    }
    return (
        <>
            {currentTodos.map(todo => (
                <TodoItem
                    {...todo}
                    key={todo.id}
                />
            ))}
            {showPagination &&
                <div className="d-flex justify-content-center">
                    <Pagination page={page} changePageHandler={changePageHandler}/>
                </div>
            }
        </>
    );
};

export default TodoList;