export interface PokemonResponse{
    success: boolean;
    count: number;
    data: Pokemon[];
}

export interface Pokemon{
    id: number;
    name: string;
}
