import React, { createContext, useContext, useState } from "react";

const CardContextapi = createContext();

const useCardContext = () => useContext(CardContextapi);

const CardContext = ({ children }) => {
  const [data, setData] = useState(0);
  return (
    <CardContextapi.Provider value={{ data, setData }}>
      {children}
    </CardContextapi.Provider>
  );
};

export default CardContext;
