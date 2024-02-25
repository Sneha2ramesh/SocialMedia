import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
    id:1,
    name:"Riya",
    profilePic:
    "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
  });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser,login }}>
      {children}
    </AuthContext.Provider>
  );
};
