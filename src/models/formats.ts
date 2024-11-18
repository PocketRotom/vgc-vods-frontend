export interface FormatsResponse{
    success: boolean;
    count: number;
    data: Formats[];
}


export interface Formats{
    id: number;
    name: string;
}
