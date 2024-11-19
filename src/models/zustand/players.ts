import { Player } from '../../models/player';

export type PlayersState = {
    players: Player[];
    setPlayers: (events: Player[]) => void;
};
