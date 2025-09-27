// import tickets from '../public/tickets.json';

export const fetchTickets = async () => {
    const res = await fetch('../public/tickets.json');
    if(!res.ok) {
        throw new Error("Failed to fetch tickets")
    } else {
        return res.json();
    }
}