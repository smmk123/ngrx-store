export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }
  
  export interface User {
    id: number;
    username: string;
    token: string;
  }