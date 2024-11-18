import { Match } from "../match";

export type MatchesState = {
    matches: Match[];
    setMatches: (matches: Match[]) => void;
    currentMatch: Match | null;
    setCurrentMatch: (match: Match) => void;
    resetCurrentMatch: () => void;
    organizedMatches: [string | number | undefined, Match[]][];
    setOrganizedMatches: (matches: [string | number | undefined, Match[]][]) => void;
};
