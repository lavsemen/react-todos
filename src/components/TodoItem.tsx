import React, {useEffect, useRef, useState} from 'react';
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from "@mui/icons-material/Delete";
import {TodoType} from "../types";
import {useDispatch} from "react-redux";
import {removeTodo, changeCompleted, editTodo} from '../store/todo/todoSlice'
import {formatDate} from "../utils/date";

const TodoItem = (props: TodoType) => {
    const [completed, setCompleted] = useState<boolean>(props.completed);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [todoDescription, setTodoDescription] = useState<string>(props.description);
    const todoDescriptionRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const date = formatDate(props.date);

    const removeHandler = () => dispatch(removeTodo(props.id));
    const editTodoHandler = () => setIsEditing(state => !state);


    useEffect(() => {
            if (isEditing && todoDescriptionRef.current) {
                todoDescriptionRef.current.focus();
            } else {
                dispatch(editTodo({id: props.id, description: todoDescription}));
            }
        },
        [dispatch, isEditing, props.id, todoDescription]);

    useEffect(() => {
        dispatch(changeCompleted({id: props.id, completed: completed}));
    }, [completed, dispatch, props.id])

    return (
        <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
            <li
                className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <div className="form-check">
                    <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
                           aria-label="..." checked={completed} onChange={() => setCompleted(!completed)}/>
                </div>
            </li>
            <li
                className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                {isEditing
                    ?<input type="text"
                            ref={todoDescriptionRef}
                            className="form-control form-control-lg"
                            value={todoDescription}
                            onChange={(e) => setTodoDescription(e.target.value) }/>
                    : <p className={`lead fw-normal mb-0 ${completed? 'text-decoration-line-through': ''}`}> {todoDescription}</p>
                }
            </li>
            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div className="d-flex flex-row justify-content-end mb-1">
                    <div onClick={editTodoHandler} className="text-info" data-mdb-toggle="tooltip" title="Edit todo">
                        {isEditing ? <CheckIcon/> : <CreateIcon/>}
                    </div>
                    <div onClick={removeHandler} className="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                        <DeleteIcon/>
                    </div>
                </div>
                <div className="text-end text-muted">
                    <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>
                            {date}
                        </p>
                    </a>
                </div>
            </li>
        </ul>
    );
};

export default TodoItem;