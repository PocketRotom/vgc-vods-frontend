import { create } from 'zustand';
import { LoginState } from '../models/zustand/login';

const loginStore = create<LoginState>(set => ({
    username: "joaoabelcosta3",
    setUsername: username => set({ username }),
    password: "123456",
    setPassword: password => set({ password }),
    isLoggedIn: false,
    setIsLoggedIn: isLoggedIn => set({ isLoggedIn }),
}));

export default function useLogin<T>(selector: (state: LoginState) => T) {
    return loginStore(selector);
}
