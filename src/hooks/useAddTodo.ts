import {useDispatch} from "react-redux";
import {addTodo} from '../store/todo/todoSlice';
import {ChangeEvent, useState} from "react";


export const useAddTodo = () => {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();


    const changeDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }
    const addTodoHandler = () => {
        dispatch(addTodo({
            id: Math.random(),
            completed: false,
            description,
            date: new Date().toISOString(),
        }));
        setDescription("");
    }

    return {description, changeDescriptionHandler,  addTodoHandler};
}