import {TodoType} from "../types";

export const filterHandler = (filterName: string, todos: TodoType[]) => {
    return todos.filter(todo => {
        switch (filterName) {
            case 'completed':
                return todo.completed;
            case 'uncompleted':
                return !todo.completed;
            default:
                return true;
        }
    })
}

export const sortHandler = (sortName: string, filterHandler: () => TodoType[]) => {
    switch (sortName) {
        case 'byDateAsc':
            return filterHandler().sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
        case 'byDateDesc':
            return filterHandler().sort((a: TodoType, b:TodoType) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
        case 'byLengthAsc':
            return filterHandler().sort((a:TodoType, b:TodoType) => {
                return   b.description.length - a.description.length;
            })
        case 'byLengthDesc':
            return filterHandler().sort((a:TodoType, b:TodoType) => {
                return a.description.length - b.description.length;
            })
        default:
            return filterHandler();
    }
}
