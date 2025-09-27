import React from 'react';

const Resolved = ({ completeTask }) => {
    return (
        <div className='flex justify-between h-[270px]  bg-gradient-to-br from-[#54cf68] to-[#00827a] rounded-lg relative'>
            <div>
                <img className='h-full w-full' src="../../../public/assets/vector1.png" alt="" />
            </div>
            <div className='flex justify-center flex-col items-center min-w-[200px] text-2xl text-white'>
                <div className="text-2xl">Resolved</div>
                <div className="text-[40px] font-semibold mt-4">{completeTask?.length}</div>
            </div>
            <div>
                <img className='h-full w-full' src="../../../public/assets/vector2.png" alt="" />
            </div>
        </div>
    );
};

export default Resolved;