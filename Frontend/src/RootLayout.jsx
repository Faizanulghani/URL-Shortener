import { Outlet, useNavigate } from "@tanstack/react-router";
import Navbar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/slice/authSlice";
import { logoutUser } from "./api/user.api";

const RootLayout = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: "/auth" });
    } catch (err) {
      console.error("Logout failed:", err);
      dispatch(logout());
    }
  };
  return (
    <>
      <Navbar
        isLoggedIn={!!auth.user}
        userName={auth.user?.user?.name}
        userAvatar={auth.user?.user?.avatar}
        onLogout={handleLogout}
      />
      <Outlet />
    </>
  );
};

export default RootLayout;
