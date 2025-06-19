// src/store/userStore.ts
import { create } from 'zustand';

type UserStore = {
  currentUser: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  signup: (username: string, password: string) => boolean;
  users: { username: string; password: string }[];
};

const useUserStore = create<UserStore>((set, get) => ({
  currentUser: null,
  users: [],

  login: (username, password) => {
    const user = get().users.find(u => u.username === username && u.password === password);
    if (user) {
      set({ currentUser: username });
      return true;
    }
    return false;
  },

  logout: () => set({ currentUser: null }),

  signup: (username, password) => {
    const exists = get().users.some(u => u.username === username);
    if (exists) return false;
    set(state => ({
      users: [...state.users, { username, password }],
      currentUser: username,
    }));
    return true;
  },
}));

export default useUserStore;
