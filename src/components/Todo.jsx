import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const taskInputRef = useRef();
    const descInputRef = useRef();

    const add = () => {
        const taskText = taskInputRef.current.value.trim();
        const descText = descInputRef.current.value.trim();

        if (taskText === "" || descText === "") {
            return null;   //Don't have any text in input filed return null
        }

        const newTodo = {
            id: Date.now(),
            task: taskText,
            description: descText,
            isComplete: false,
        };

        setTodoList((prev) => [...prev, newTodo]);
        taskInputRef.current.value = "";
        descInputRef.current.value = "";
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo;
            });
        });
    };

    const editTodo = (id, newTask, newDescription) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: newTask, description: newDescription };
                }
                return todo;
            });
        });
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    return (

        
        <div className='bg-white place-self-center w-11/12 max-w-lg flex flex-col p-7 min-h-[550px] rounded-xl shadow-lg'>

            {/* ----------Title-------- */}
            <div className='flex items-center mt-7 gap-3'>
                <img className='w-10' src={todo_icon} alt="To-Do Icon" />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            {/* ----Input Box for Task and Description----- */}
            <div className='flex flex-col gap-4 my-7'>
                <input ref={taskInputRef} className='bg-gray-200 rounded-lg h-12 pl-4 pr-2 text-lg placeholder:text-slate-600 outline-none' type="text" placeholder='Add your task' />
                <input ref={descInputRef} className='bg-gray-200 rounded-lg h-12 pl-4 pr-2 text-lg placeholder:text-slate-600 outline-none' type="text" placeholder='Add description' />
                <button onClick={add} className='bg-orange-600 h-12 w-32 text-white text-lg font-medium self-end rounded-lg shadow-md hover:bg-orange-700'>ADD +</button>
            </div>

            {/* ----To Do List----- */}
            <div>
                {todoList.map((item, index) => {
                    return (
                        <Todoitems
                            key={index}
                            id={item.id}
                            task={item.task}
                            description={item.description}
                            isComplete={item.isComplete}
                            deleteTodo={deleteTodo}
                            toggle={toggle}
                            editTodo={editTodo}  
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Todo;
