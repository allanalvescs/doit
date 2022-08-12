import { AxiosResponse } from "axios";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import api from "../server/api";

interface Tasks {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Tasks[];
  createdTasks(data: Omit<Tasks, "id">, accessToken: string): Promise<void>;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const useTasks = () => useContext(TasksContext);

const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const createdTasks = useCallback(
    async (data: Omit<Tasks, "id">, accessToken: string) => {
      api
        .post("/tasks", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response: AxiosResponse<Tasks>) =>
          setTasks([...tasks, response.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <TasksContext.Provider value={{ tasks, createdTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export { useTasks, TasksProvider };
