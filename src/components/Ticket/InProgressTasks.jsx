

const InProgressTasks = ({ inProgress, handleCompleteTask }) => {

    return (
        <>
            {inProgress.map((inProgs) => {
                return (
                    <div key={inProgs?.id} className="p-3 rounded-md border bg-white">
                        <h4 className="text-[18px] font-medium text-[#001931] mb-3">{inProgs?.title}</h4>
                        <button onClick={() => handleCompleteTask(inProgs)} className="text-[16px] w-full py-3 rounded-md bg-[#02A53B] text-white">Complete</button>
                    </div>
                )
            })}

        </>
    );
};

export default InProgressTasks;