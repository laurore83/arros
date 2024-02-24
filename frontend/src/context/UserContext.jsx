import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import ApiService from "../services/apiService";

const userContext = createContext();
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api`;

const apiservice = new ApiService();
export function UserContextProvider({ children }) {
  // le state qui contient les infos du user connecté
  const [user, setUser] = useState(null);

  const register = async (newUser) => {
    try {
      setUser(await apiservice.post(`${baseUrl}/user`, newUser));
      alert(`Bienvenue ${newUser.email}`);
      // return await login(newUser);
    } catch (err) {
      alert(err.message);
    }
    return null;
  };

  // exemple méthodes pour communiquer avec une api

  const contextData = useMemo(
    () => ({
      user,
      register,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <userContext.Provider value={contextData}>{children}</userContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(userContext);
