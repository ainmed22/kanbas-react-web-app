import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle, editTodo } from "./reducers/todos-reducer";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({ do: '' });

    const dispatch = useDispatch();
    
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo));
    }

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index));
    }

    const createTodoClickHandler = () => {
        dispatch(addTodo(todo));
        setTodo({ do: '' });
    }

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    
    const editTodoClickHandler = (index) => {
        const editingTodo = { editedIndex: index, newTodo: todo.do };
        dispatch(editTodo(editingTodo));
    }

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25 float-end">
                        Create
                    </button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"
                    />
                </li>
                {todos.map((todo, index) => (
                    <li key={todo._id} className="list-group-item">
                        <button onClick={() => deleteTodoClickHandler(index)}
                                className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        
                        <button onClick={() => editTodoClickHandler(index)}
                                className="btn btn-light float-end ms-2">
                            Edit
                        </button>
                        
                        <input
                            type="checkbox"
                            className="me-2"
                            checked={todo.done}
                            onChange={() => toggleTodoDone(todo)}
                        />
                        {todo.do}
                        {todo.done ? " (Done)" : " (Not Done)"}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todos;