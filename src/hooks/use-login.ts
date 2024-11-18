import { create } from 'zustand';
import { LoginState } from '../models/zustand/login';

const loginStore = create<LoginState>(set => ({
    username: "",
    setUsername: username => set({ username }),
    password: "",
    setPassword: password => set({ password }),
}));

export default function useLogin<T>(selector: (state: LoginState) => T) {
    return loginStore(selector);
}
