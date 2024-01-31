import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import TaskListPage from './comp/TaskListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>} />
        <Route path='/task-list' element={<TaskListPage></TaskListPage>} />
      </Routes>
    </Router>
  );
};

export default App;
