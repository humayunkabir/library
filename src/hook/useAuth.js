import { useContext } from "react";
import { AppContext } from "../context/Context";

const useAuth = () => {
  const { setUser } = useContext(AppContext);

  const login = async (rcb, cb) => {
    const { accessToken } = await rcb();

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      setUser({ name: "Humayun kabir" });
      !!cb && cb();
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return { login, logout };
};

export default useAuth;
