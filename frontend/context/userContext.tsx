import { createContext, useContext, useState, useEffect } from "react";

function getInitialUserState() {
  const userString = localStorage.getItem("user");
  if (userString) {
    return JSON.parse(userString);
  }
  return { id: "", name: "", email: "" };
}

type UserContextProps = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  setUser: (user: { id: string; name: string; email: string }) => void;
};

const UserContext = createContext<UserContextProps>({
  user: {
    id: "",
    name: "",
    email: ""
  },
  setUser: () => {}
});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(getInitialUserState());
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}