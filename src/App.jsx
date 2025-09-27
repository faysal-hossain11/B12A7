import { Suspense, useState } from 'react'
import { fetchTickets } from '../lib/api'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import InProgress from './components/Ticket/InProgress'
import Resolved from './components/Ticket/Resolved'
import TicketCard from './components/Ticket/TicketCard'
import TicketsGrid from './components/Ticket/TicketsGrid'
import InProgressTasks from './components/Ticket/InProgressTasks'
import { toast, ToastContainer } from 'react-toastify'
import ResolvedTask from './components/Ticket/ResolvedTask'



const ticketsPromise = fetchTickets();

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);


  const handleInProgress = (ticket) => {
    const isProgressAdded = inProgress.some((tkt) => tkt?.id === ticket?.id);

    if (isProgressAdded) {
      return toast.error("This ticket is already in In-Progress");
    }

    setInProgress([...inProgress, ticket]);
    toast.success("Ticket added to In-Progress!");
  }



  const handleCompleteTask = (completeTicket) => {

    setInProgress((prev) => prev.filter((task) => task?.id !== completeTicket?.id));

    setCompleteTask((prev) => {
      if(prev.some((task) => task?.id === completeTicket?.id)) {
        toast.error("This ticket is already completed");
        return prev;
      }

      const comUpdated = [...prev, completeTicket];
      toast.success("Ticket moved to Completed!");
      return comUpdated;
    });
    
  };




  return (
    <>
      <Header />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">

        <section className="relative overflow-hidden rounded-md banner-vector">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-6 md:p-8 rounded-md">
            <InProgress inProgress={inProgress} />
            <Resolved completeTask={completeTask} />
          </div>
          <div className="border-t border-slate-200 mt-3"></div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[24px] font-bold text-[#34485A]">Customer Tickets</h3>
            </div>

            <Suspense fallback={<h1 className="loading text-4xl loading-bars loading-xl text-center"></h1>}>
              <TicketsGrid inProgress={inProgress} ticketsPromise={ticketsPromise} handleInProgress={handleInProgress} completeTask={completeTask} />
            </Suspense>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-md border border-slate-100 sticky top-6">
              <h4 className="text-[24px] font-bold text-[#34485A]">Task Status</h4>
              <div className="mt-4 space-y-4 mb-8">
                {inProgress?.length === 0 ? <p className="text-sm text-slate-500">Select a ticket to add to Task Status</p> : <InProgressTasks inProgress={inProgress} handleCompleteTask={handleCompleteTask} />}
              </div>

              <div>
                <h5 className="text-[24px] text-[#34485A] font-semibold">Resolved Task</h5>
                {completeTask?.length === 0 ? <p className="mt-2 text-sm text-slate-500">No resolved tasks yet.</p> : <ResolvedTask completeTask={completeTask} />}
              </div>
            </div>
          </aside>
        </section>

      </main>

      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
