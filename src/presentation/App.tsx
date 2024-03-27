import { useEffect, useState } from 'react'; // Import React


function App () {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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

export default App;
