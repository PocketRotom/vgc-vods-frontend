import { Event } from '../../models/events';

export type EventsState = {
    events: Event[];
    setEvents: (events: Event[]) => void;
};
