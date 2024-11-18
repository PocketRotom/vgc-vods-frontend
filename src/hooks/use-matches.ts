import { create } from 'zustand';
import { MatchesState } from '../models/zustand/matches';

const matchState = create<MatchesState>(set => ({
    matches: [],
    setMatches: matches => set({ matches: matches }),
    currentMatch: null,
    setCurrentMatch: match => set({ currentMatch: match }),
    resetCurrentMatch: () => set({ currentMatch: null }),
    organizedMatches: [],
    setOrganizedMatches: matches => set({ organizedMatches: matches }),
}));

export default function useMatch<T>(selector: (state: MatchesState) => T) {
    return matchState(selector);
}
