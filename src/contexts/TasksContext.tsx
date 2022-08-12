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
  loadTasks(useId: string, accessToken: string): Promise<void>;
  deleteTask(taskId: string, accessToken: string): Promise<void>;
  updateTask(
    taskId: string,
    userId: string,
    accessToken: string
  ): Promise<void>;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const useTasks = () => useContext(TasksContext);

const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const loadTasks = useCallback(async (userId: string, accessToken: string) => {
    try {
      const response = await api.get(`/tasks?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setTasks(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

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

  const deleteTask = useCallback(
    async (taskId: string, accessToken: string) => {
      try {
        api
          .delete(`/tasks/${taskId}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((_) => {
            const filteredTasks = tasks.filter((task) => task.id !== taskId);
            setTasks(filteredTasks);
          });
      } catch (err) {
        console.log(err);
      }
    },
    [tasks]
  );

  const updateTask = useCallback(
    async (taskId: string, userId: string, accessToken: string) => {
      try {
        await api.patch(
          `tasks/${taskId}`,
          { completed: true, userId: userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const filteredTasks = tasks.filter((task) => task.id !== taskId);
        const actualTaks = tasks.find((taks) => taks.id === taskId);

        if (actualTaks) {
          setTasks([...filteredTasks, actualTaks]);
        }
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  return (
    <TasksContext.Provider
      value={{ tasks, createdTasks, loadTasks, deleteTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { useTasks, TasksProvider };
