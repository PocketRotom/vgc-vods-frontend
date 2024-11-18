export interface PlayerResponse{
    success: boolean;
    count: number;
    data: Player[];
}

export interface AddPlayerResponse{
    success: boolean;
    data: number[];
}


export interface Player{
    id: number;
    player_name: string;
    nickname: string;
    is_caster: number;
    country_name: string;
    country_code: string;
}
