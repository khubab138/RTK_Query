import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import { useGetTodoQuery, useDeleteTodoMutation, useEditeTodoMutation } from '../Redux/Slices/TodoSlice'


const TodoList: React.FC = () => {

    const { data: TODOS, isError, isLoading } = useGetTodoQuery()
    const [deleteTodo] = useDeleteTodoMutation()
    const [editTodo] = useEditeTodoMutation()


    function handleDone(id: string, isDone: boolean) {
        editTodo({
            id: id,
            body: {
                isDone: !isDone,


            }
        })
    }

    function handleEdite(id: string, isEdit: boolean) {
        editTodo({
            id: id,
            body: {
                isEdit: !isEdit
            }
        })
    }

    const [newTodo, setNewTodo] = useState<string>()
    function handleEditeValue(id: string, isEdit: boolean) {
        editTodo({
            id: id,
            body: {
                todo: newTodo,
                isEdit: !isEdit
            }
        })
    }



    return (
        <>       {isError && <h1>Somthing went Worng</h1>}
            {isLoading && <h1>Loading...</h1>}
            {TODOS?.length === 0 && <h1 className='HEADING lg:text-3xl text-slate-800' >Add some todo's</h1>}
            {TODOS?.map((todo) =>

                todo.isEdit ? (
                    <li
                        key={todo.id}
                        className=" flex felx-col justify-evenly bg-slate-800 p-2 rounded-lg  m-1     "
                    >
                        <div className='relative w-70'>

                            <input

                                onChange={(e) => setNewTodo(e.target.value)}
                                className=" w-55 px-1  truncate  rounded-lg bg-white text-slate-800  "
                            />
                            <button
                                onClick={() => handleEditeValue(todo.id, todo.isEdit)}
                                className=" absolute px-1 right-0   cursor-pointer   bg-teal-400 text-slate-800 font-bold   rounded-lg hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 "
                            >
                                Save
                            </button>

                        </div>


                    </li>
                )
                    : (


                        <div
                            key={todo.id}
                            className={`flex felx-col justify-evenly  m-1 p-2  h-[13%] bg-slate-800 border-2 border-white/30 rounded-lg ${todo.isDone && 'opacity-50 cursor-not-allowed'} `}
                        >

                            <h1 className={`w-50 ${todo.isDone && "line-through"}`}>{todo.todo}</h1>
                            <div className=" flex justify-evenly items-center gap-2 text-teal-400   ">
                                <button disabled={todo.isDone}  >
                                    <MdEdit onClick={() => handleEdite(todo.id, todo.isEdit)} className={`text-2xl hover:text-blue-800 `} />
                                </button>
                                <button >
                                    <MdDelete onClick={() => deleteTodo(todo.id)} className="text-2xl hover:text-red-800 " />
                                </button>
                                <button disabled={todo.isDone} >
                                    <FaCheck onClick={() => handleDone(todo.id, todo.isDone)} className="text-2xl hover:text-green-800" />
                                </button>

                            </div>
                        </div>

                    )
            )}
        </>
    )
}

export default TodoList