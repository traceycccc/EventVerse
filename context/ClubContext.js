import React, { createContext, useState, useContext } from 'react';

// Create a context
const ClubContext = createContext();

// Create a provider component
export const ClubProvider = ({ children }) => {
    const [clubAJoined, setClubAJoined] = useState(true);  // Assume the user is a member initially

    return (
        <ClubContext.Provider value={{ clubAJoined, setClubAJoined }}>
            {children}
        </ClubContext.Provider>
    );
};

// Create a custom hook to use the ClubContext
export const useClub = () => useContext(ClubContext);
