import { create } from 'zustand';
import { PlayersState } from '../models/zustand/players';

const playersState = create<PlayersState>(set => ({
    players: [],
    setPlayers: players => set({ players: players }),
}));

export default function usePlayers<T>(selector: (state: PlayersState) => T) {
    return playersState(selector);
}
