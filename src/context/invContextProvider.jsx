import { useState, createContext, useContext } from "react";

const invContext = createContext();

export default function InvContextProvider({ children }) {
  const [inv, setInv] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <invContext.Provider value={[inv, setInv]}>{children}</invContext.Provider>
  );
}

export function useInvContext() {
  return useContext(invContext);
}
