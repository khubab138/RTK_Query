import React, { useState } from 'react'

import TodoList from './TodoList'
import { useAddTodoMutation } from '../Redux/Slices/TodoSlice'
import type { todo } from '../models/todo.model'




const InputSection: React.FC = () => {

    const [addTodo] = useAddTodoMutation()
    const [todo, settodo] = useState<string>('')


    function handleAdd() {
        const Todo: todo = {
            todo, isDone: false, isEdit: false, id: ''
        }
        addTodo(Todo)
        settodo("")


    }
    return (<section className="grid grid-cols max-w-screen h-full p-2 m-2 text-white bg-white/10 bg-opacity-0  rounded-xl   ">
        <div className=" grid place-content-center p-4  m-3  ">

            <div className="relative ">
                <input
                    className="h-20 text-lg border-white/30 text-white border-2 p-3 rounded-full hover:border-2 hover:border-slate-800"
                    type="text"
                    value={todo}
                    placeholder="Enter Todo..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { settodo(e.target.value) }}
                />
                <button

                    onClick={handleAdd}
                    className="absolute right-3 text-xl  top-1/2 -translate-y-1/2 px-5 py-3 cursor-pointer bg-teal-400 text-slate-800 font-bold rounded-full hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400"
                >
                    +
                </button>
            </div>
        </div>
        <ul className=" grid lg:grid-cols-3 sm:grid-cols gap-2 justify-evenly  p-5  m-3 border-2 border-white/30 rounded-xl "
        >

            <li className='col-span-2 border-1 rounded-lg p-2  border-white/30' >
                <div className='flex flex-wrap justify-evenly items-start'><TodoList />
                </div>
            </li>
            <li className='col-span-1  border-1 rounded-lg p-2  border-white/30' >
                <h1 className='HEADING lg:text-3xl text-slate-800' >Completed</h1>
                <div className='flex flex-wrap justify-evenly items-start'>
                    <TodoList />
                </div>
            </li>

        </ul>
    </section>)
}

export default InputSection