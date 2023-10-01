import React, { createContext, useState} from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [showNavbar, setShowNavbar] = useState(false);
    const [isLoading, setLoading] = useState(true);

  return (
    <DataContext.Provider value={{ showNavbar, setShowNavbar, isLoading, setLoading}}> 
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

