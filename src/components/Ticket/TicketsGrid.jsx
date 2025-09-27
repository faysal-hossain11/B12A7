import React, { use } from 'react';
import TicketCard from './TicketCard';

const TicketsGrid = ({ inProgress, completeTask, ticketsPromise, handleInProgress }) => {
    const allTickets = use(ticketsPromise);

    const visibleTickets = allTickets.filter((fTask) => !completeTask.some((t) => t.id === fTask.id));

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 shadow-xl  shadow-gray-500'>
            {visibleTickets.map((ticket) => {
                return (
                    <TicketCard key={ticket?.id} ticket={ticket} inProgress={inProgress} handleInProgress={handleInProgress} />
                )
            })}
        </div>
    );
};

export default TicketsGrid;