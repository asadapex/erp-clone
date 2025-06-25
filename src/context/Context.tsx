import {
  createContext,
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";

interface ContextType {
  token: boolean;
  setToken: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ContextType>({
  token: false,
  setToken: () => false,
});

export const GlobalContext: FC<{ children: ReactNode }> = ({ children }) => {
  const isToken = localStorage.getItem("token");
  const [token, setToken] = useState<boolean>(
    (isToken && JSON.parse(isToken)) || false
  );

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
};
