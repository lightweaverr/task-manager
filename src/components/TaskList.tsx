'use client'
import React, { useState } from 'react'
import TaskCard from './TaskCard';

const TaskList = () => {


  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Complete Project Proposal',
      description: 'Draft and submit the Q1 project proposal',
      priority: 1,
      status: 'pending',
      completed: false
    },
    {
      id: '2',
      title: 'Complete Project Proposal',
      description: 'Draft and submit the Q1 project proposal',
      priority: 1,
      status: 'pending',
      completed: false
    }
  ]);

  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
}

export default TaskList