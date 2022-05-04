import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { api } from '../services/api';
  
interface User {
  id: string;
  name: string;
  email: string;
  token: string
}

interface SignInCredentials {
  email: string;
  password: string;
}
  
interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}
  
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
  
  export function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<User>(() => {
      const user = localStorage.getItem('@Aposte:user');
  
      if (user) {
        api.defaults.headers.common.Authorization = `Bearer ${
          JSON.parse(user).token
        }`;
  
        return JSON.parse(user);
      }
  
      return {} as User;
    });
  
    useEffect(() => {
      const user = localStorage.getItem('@Aposte:user');
  
      if (user) {
        setData(JSON.parse(user));
  
        api.defaults.headers.common.Authorization = `Bearer ${
          JSON.parse(user).token
        }`;
      }
    }, []);
  
    const isAuthenticated = !!data.token;
  
    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
      try {
        const response = await api.post('/session', { email, password });
  
        setData(response.data);
  
        localStorage.setItem(
          '@Aposte:user',
          JSON.stringify({
            code: response.data.code,
            token: response.data.token,
          }),
        );
  
        api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      } catch (error) {
        console.log(error);
      }
    }, []);
  
    const signOut = useCallback(() => {
      localStorage.removeItem('@Aposte:user');
  
      setData({} as User);
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ signIn, signOut, isAuthenticated, user: data }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    const context = useContext(AuthContext);
  
    return context;
  }
  