import { create } from 'zustand';
import { AddMatchFormState } from '../models/zustand/new-match-form';

const newMatchFormState = create<AddMatchFormState>(set => ({
    event: undefined,
    setEvent: event => set({ event: event }),

    player1: undefined,
    player2: undefined,
    setPlayer1: player => set({ player1: player }),
    setPlayer2: player => set({ player2: player }),
}));

export default function useEvents<T>(selector: (state: AddMatchFormState) => T) {
    return newMatchFormState(selector);
}
