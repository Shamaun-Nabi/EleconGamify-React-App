import { createContext, useState } from "react";
export const ContextApi = createContext();

const AppContext = ({ children }) => {
  return <ContextApi.Provider value={"ashikFromContext"}>{children}</ContextApi.Provider>;
};

export default AppContext;
