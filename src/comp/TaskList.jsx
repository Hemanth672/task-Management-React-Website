import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get('http://localhost:3001/tasks') 
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <h2>&nbsp;Today's Tasks:</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.description}</li>
          ))}
        </ul>
        <ul>
          <li>Logout When the Tasks are Completed</li>
        </ul>
      </div>
      <br />
      <center>
        <button style={{ backgroundColor: 'green', color: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 4 }} onClick={handleLogout}>Logout</button>
      </center>
    </div>
  );
};

export default TaskList;
