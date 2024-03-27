import { useEffect, useState } from 'react'; // Import React


function AppDI ({ httpClient }: any) {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await httpClient.get("https://jsonplaceholder.typicode.com/todos")
      setTasks(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Tarefas</h1>
      {tasks.map(task => {
        return <div key={task.id} data-testid={`task-${task.id}`}>{task.title} {task.completed ? '✅' : '❌'}</div>
      })}
    </>
  );
}

export default AppDI;
