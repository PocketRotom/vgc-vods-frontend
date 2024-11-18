export interface LoginResponse {
  success: boolean;
  data?: string | false; //Token
}

export interface SignupResponse {
  success: boolean;
  data?: any;
  error?: any;
}

export interface VerifyTokenResponse {
  success: boolean;
  data?: string;
  error?: {
    message: string;
    name: string;
  };
}
