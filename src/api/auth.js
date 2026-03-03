import { publicApi, authApi } from "../libs/axios";

export async function login(email, password) {
  const res = await publicApi.post("/login", { email, password });
  return res.data.accessToken;
}

export async function fetchMe() {
  const res = await authApi.get("/me");
  return res.data;
}
