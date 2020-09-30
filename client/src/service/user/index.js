import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { useStoredUser } from "./hooks/user";

const UserContext = React.createContext("user");

export const UserProvider = ({ children }) => {
  const [getUser] = useStoredUser();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const retrieveUser = async () => {
      const u = await getUser();
      setUser(u);
    };
    retrieveUser();
  }, []);

  if (!user) {
    return <Text>Setting up user... </Text>;
  }
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
