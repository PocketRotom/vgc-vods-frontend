import { create } from 'zustand';
import { EventsState } from '../models/zustand/events';

const eventsState = create<EventsState>(set => ({
    events: [],
    setEvents: events => set({ events: events }),
}));

export default function useEvents<T>(selector: (state: EventsState) => T) {
    return eventsState(selector);
}
