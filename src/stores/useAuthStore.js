import { create } from "zustand";

const authConfig = (set, get) => ({
  accessToken: null,
  user: null,
  login: async (email, password) => {},
  fetchUser: async () => {},
  logout: () => {
    set({ accessToken: null, user: null });
  },
});

export const useAuthStore = create(authConfig);
