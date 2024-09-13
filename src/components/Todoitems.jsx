import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';

const Todoitems = ({ task, description, id, isComplete, deleteTodo, toggle, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);  
    const [newTask, setNewTask] = useState(task);  
    const [newDescription, setNewDescription] = useState(description);  

    const handleEdit = () => {
        setIsEditing(true); 
    };

    const handleSave = () => {
        editTodo(id, newTask, newDescription);  
        setIsEditing(false);  
    };

    return (
        <div className='flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4 shadow-sm'>
            {isEditing ? (
            
                <div className='flex-1'>
                    <input
                        className='bg-gray-200 rounded-lg h-10 pl-3 pr-2 text-lg mb-2 outline-none w-full'
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Edit task"
                    />
                    <input
                        className='bg-gray-200 rounded-lg h-10 pl-3 pr-2 text-lg outline-none w-full'
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Edit description"
                    />
                </div>
            ) : (
              
                <div onClick={() => toggle(id)} className='flex items-center cursor-pointer flex-1'>
                    <img src={isComplete ? tick : not_tick} alt="Tick/Not Tick" className='w-7 h-7' />
                    <div className='ml-4 flex-1'>
                        <p className={`text-lg font-semibold ${isComplete ? "line-through text-gray-500" : "text-slate-700"}`}>{task}</p>
                        <p className='text-sm text-gray-500'>{description}</p>
                    </div>
                </div>
            )}

            {isEditing ? (
              
                <button onClick={handleSave} className='bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700'>
                    Save
                </button>
            ) : (
            
                <div className='flex items-center gap-1'>
                    <button onClick={handleEdit} className='mr-4 text-blue-500'>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => deleteTodo(id)} className='text-red-500'>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Todoitems;
