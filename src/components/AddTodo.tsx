import React from 'react';
import {useAddTodo} from "../hooks/useAddTodo";



const AddTodo = () => {
    const {description, changeDescriptionHandler, addTodoHandler} = useAddTodo();
    return (
        <div className="pb-2">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-row align-items-center">
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                               placeholder="Добавить..." value={description} onInput={changeDescriptionHandler}/>
                        <div className="ml-2">
                            <button type="button" className="btn btn-primary" onClick={addTodoHandler}>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;