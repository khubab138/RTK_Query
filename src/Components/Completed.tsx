import React from 'react'
import { useCompleteTodosQuery, useDeleteCompleteTodosMutation } from '../Redux/Slices/CompleteTodos'
import { MdDelete } from 'react-icons/md'

const Completed: React.FC = () => {
    const { data: completed, error } = useCompleteTodosQuery()
    const [deleteTodo] = useDeleteCompleteTodosMutation()
    console.log(error)

    return (<>
        {
            completed?.map((complete) =>
                <div

                    key={complete.id}
                    className={`flex felx-col justify-evenly  m-1 p-2  h-[13%] bg-slate-800 border-2 border-white/30 rounded-lg  `}
                >
                    <h1>{complete.todo}</h1>

                    <div className=" flex justify-evenly items-center gap-2 text-teal-400   ">

                        <button >
                            <MdDelete
                                onClick={() => deleteTodo(complete.id)}
                                className="text-2xl hover:text-red-800 " />
                        </button>


                    </div>
                </div>
            )
        }

    </>
    )
}

export default Completed