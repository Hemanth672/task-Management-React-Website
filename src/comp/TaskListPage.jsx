import React from 'react';
import TaskList from './TaskList';
import Timer from './Timer';
import NavigationBar from './Navbar';

const TaskListPage = () => {
  return (
    <div style={{backgroundImage:'url("https://img.freepik.com/free-photo/businessman-holding-hour-glass-signifies-importance-being-time_53876-13940.jpg?w=996&t=st=1705094802~exp=1705095402~hmac=20f2b4153a275c2ed99b10df9f2abbe6c1ad12f84ee2c08648a81aa9dd1de6bc")',height:347,
    backgroundPosition: 'center'}}>
      <NavigationBar></NavigationBar>
    
      <Timer />
      <TaskList />
    </div>
  );
};

export default TaskListPage;
