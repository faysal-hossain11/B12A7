import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const ResolvedTask = ({ completeTask }) => {
    console.log("Resolved Task", completeTask);
    
    return (
        <>
            
            
            {completeTask.map((complete) => {
                return (
                    <div key={complete?.id} className="p-4 rounded-lg bg-[#01a53b3a] border-2 border-[#01a53a8c] mb-4">
                        <p className='mb-3 text-[#001931]'>{complete?.title}</p>
                        <div className='flex items-center gap-2 '>
                            <IoMdCheckmark className='text-[#02A53B] ' />
                            <span className='text-sm text-[#02A53B]'>Completed</span>
                        </div>
                    </div>
                )
            })}
        </>

    );
};

export default ResolvedTask;