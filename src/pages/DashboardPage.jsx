// import { useEffect } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUser = useAuthStore.getState().fetchUser;
  //   fetchUser();
  // }, []);

  function handleLogout() {
      logout();
      navigate("/login")
  }

  return (
    <div>
      <h1 className="text-2xl  font-bold">Dashboard page</h1>
      <div>id: {user?.id}</div>
      <div>email: {user?.email}</div>
      <div>role: {user?.role}</div>
      <button onClick={handleLogout} className="bg-gray-300 p-4 mt-4 cursor-pointer">ออกจากระบบ</button>
    </div>
  );
}
