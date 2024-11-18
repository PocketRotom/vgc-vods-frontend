export interface CountriesResponse {
  success: boolean;
  count: number;
  data: Country[];
}

export interface Country {
  id: number;
  name: string;
  alpha_3: string;
}
