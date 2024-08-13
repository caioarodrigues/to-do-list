import { createContext, useState } from "react";
import { ITask } from "../types";

interface GlobalContextProps {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <GlobalContext.Provider value={{ tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  );
};
