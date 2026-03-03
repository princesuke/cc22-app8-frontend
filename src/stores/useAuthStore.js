import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as authService from "../api/auth";

const authConfig = (set, get) => ({
  accessToken: null,
  user: null,
  login: async (email, password) => {
    const accessToken = await authService.login(email, password);
    set({ accessToken });

    await get().fetchUser();
  },
  fetchUser: async () => {
    const token = get().accessToken
    if(!token) return;

    const user = await authService.fetchMe();
    set({ user })
  },
  logout: () => {
    set({ accessToken: null, user: null });
  },
});

export const useAuthStore = create(
    persist(authConfig, { name: "auth-storage"})
);
