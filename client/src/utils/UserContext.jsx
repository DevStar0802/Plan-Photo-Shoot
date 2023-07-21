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

  // Function to add a student
  const logInUser = (user) => {
    console.log('the current users: ', users)
    const login = true;
    const loggedInUser = { ...user, login };
    console.log(loggedInUser)
    setUser({ logged_in: login, email: loggedInUser.email });
    console.log('the new users: ', users)
  };

  return (
    <UserContext.Provider
      value={{ logInUser }}>
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </UserContext.Provider>
  );
};
