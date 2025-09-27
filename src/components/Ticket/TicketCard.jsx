import { GoCalendar } from "react-icons/go";

const TicketCard = ({ ticket, inProgress, handleInProgress }) => {

    return (
        <article
            className="ticket-card p-4 bg-white rounded-md border border-slate-100 cursor-pointer"
            onClick={() => handleInProgress(ticket)}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-[18px] text-[#001931] ">{ticket?.title}</h4>
                        <span className={`flex items-center space-x-2 py-1 px-[10px] rounded-xl ${inProgress?.some((tks) => tks?.id === ticket?.id) ? "bg-[#F8F3B9] text-[#FEBB0C] " : "bg-emerald-100 text-emerald-300"}`}>
                            <span className={`w-[12px] h-[12px] rounded-full ${inProgress.some(t => t.id === ticket?.id) ? "bg-[#FEBB0C]" : "bg-emerald-500"}`}></span>

                            <span className="text-xs text-gray-700">
                                {inProgress.some(t => t.id === ticket?.id) ? "In Progress" : ticket?.status}
                            </span>
                        </span>
                    </div>
                    <p className="text-[16px] mt-2 text-[#627382] ">{ticket?.description?.length > 106 ? ticket.description.slice(0, 106) + "..." : ticket.description}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-[14px]">#{ticket?.id}</span>
                            <span className="uppercase text-amber-600 text-[14px] font-semibold">{ticket?.priority}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="ml-auto text-[14px]">{ticket?.customer}</span>
                            <span className="ml-auto flex gap-1 text-[14px] items-center"><GoCalendar />{new Date(ticket?.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TicketCard;