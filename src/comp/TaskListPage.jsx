import React from 'react';
import TaskList from './TaskList';
import Timer from './Timer';
import NavigationBar from './Navbar';

const TaskListPage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
    
      <Timer />
      <TaskList />
    </div>
  );
};

export default TaskListPage;
