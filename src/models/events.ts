export interface EventsResponse { 
    success: boolean;
    count: number;
    data: Event[];
}


export interface AddEventResponse {
    success: boolean;
    data: number[];
  }

export interface Event {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    location: string;
    format_id: number;
    country_id: number;
  }
