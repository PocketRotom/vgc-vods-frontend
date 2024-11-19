import { Event } from "../events";
import { Player } from "../player";

export type AddMatchFormState = {
    event: Event | undefined;
    setEvent: (event: Event | undefined) => void;
    
    player1: Player | undefined;
    player2: Player | undefined;
    setPlayer1: (player: Player | undefined) => void;
    setPlayer2: (player: Player | undefined) => void;
};
