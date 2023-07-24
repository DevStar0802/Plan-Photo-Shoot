import React, { createContext, useContext, useState } from 'react';

// Initialize new context for users
const UserContext = createContext();

//A custom hook to provide immediate usage of the user context value in other components
export const useUserContext = () => useContext(UserContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const UserProvider = ({ children }) => {
  const [users, setUser] = useState({
    logged_in: false,
    email: ''
  });

  // Function to login the user
  const logInUser = (user) => {
    const login = true;
    const loggedInUser = { ...user, login };
    setUser({ logged_in: true, email: loggedInUser });
  };

  // Function to logout the user
  const logOutUser = (user) => {
    const login = false;
    const loggedInUser = { ...user, login };
    setUser({ logged_in: false, email: null });
  };

  return (
    <UserContext.Provider
      value={{ logInUser, logOutUser, users }}>
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </UserContext.Provider>
  );
};
