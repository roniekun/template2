import React, { createContext, useState} from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [showNavbar, setShowNavbar] = useState(false);
  return (
    <DataContext.Provider value={{ showNavbar, setShowNavbar}}> 
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

