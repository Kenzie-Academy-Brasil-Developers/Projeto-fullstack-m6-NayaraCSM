import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../../pages/LoginPage/validator";
import { api } from "../../services/api";
import { TRegisterData } from "../../pages/RegisterPage/validator";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  signIn: (data: TLoginData) => void;
  newUser: (data: TRegisterData) => void;
  logout: () => void;
  loading: boolean;
  isModalOpenSucessRegister: boolean;
  setIsModalOpenSucessRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextValues>(
  {} as UserContextValues
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isModalOpenSucessRegister, setIsModalOpenSucessRegister] =
    useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user:token");
    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Userorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Userorization = `Bearer ${token}`;
      localStorage.setItem("user:token", token);

      navigate("home");
    } catch (err) {
      console.log(err);
    }
  };

  const newUser = async (data: TRegisterData) => {
    let body = {};
    if (data.isAdvertiser === "true") {
      const { city, state, number, complement, street, cep, ...rest } = data;
      body = {
        ...rest,
        address: { city, state, number, complement, street, cep },
        isAdvertiser: true,
      };
    } else {
      const { city, state, number, complement, street, cep, ...rest } = data;
      body = {
        ...rest,
        address: { city, state, number, complement, street, cep },
        isAdvertiser: false,
      };
    }
    try {
      await api.post("/user", body);
      setIsModalOpenSucessRegister(true);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user:token");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        signIn,
        newUser,
        logout,
        loading,
        isModalOpenSucessRegister,
        setIsModalOpenSucessRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
