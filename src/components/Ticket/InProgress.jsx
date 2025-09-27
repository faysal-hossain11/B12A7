import React from 'react';

const InProgress = ({ inProgress }) => {

    return (
        <div className='flex justify-between h-[270px]  bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-lg relative'>
            <div>
                <img className='h-full w-full' src="/assets/vector1.png" alt="" />
            </div>
            <div className='flex justify-center flex-col items-center min-w-[200px] text-2xl text-white'>
                <div className="text-2xl">In-Progress</div>
                <div className="text-[40px] font-semibold mt-4">{inProgress?.length}</div>
            </div>
            <div>
                <img className='h-full w-full' src="/assets/vector2.png" alt="" />
            </div>
        </div>
    );
};

export default InProgress;