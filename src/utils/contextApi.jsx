import { createContext, useState } from "react";
export const ContextApi = createContext();

const AppContext = ({ children }) => {
  const [categorey, setCategorey] = useState();
  const [products, setProducts] = useState();
  return (
    <ContextApi.Provider
      value={{
        categorey,
        setCategorey,
        products,
        setProducts,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default AppContext;
