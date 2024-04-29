import { User } from '@/shared/models/services/auth/responses/register.response';
import create from 'zustand';

// Definir el tipo para la información del usuario
// interface User {
//   name: string;
//   email: string;
//   token: string;
// }

// Definir el store de autenticación
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
  token: string | null;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  login: (userData, token) =>
    set((state) => ({
      isAuthenticated: true,
      user: userData,
      token
    })),
  logout: () =>
    set((state) => ({
      isAuthenticated: false,
      user: null,
      token: null
    })),
}));

export default useAuthStore;