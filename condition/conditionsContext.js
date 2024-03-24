import React, { createContext, useState } from "react";

const ConditionContext = createContext();

export const ConditionProvider = ({ children }) => {
  const [isConditionMet, setIsConditionMet] = useState(false);

  return (
    <ConditionContext.Provider value={{ isConditionMet, setIsConditionMet }}>
      {children}
    </ConditionContext.Provider>
  );
};

export default ConditionContext;
