'use client'
import React, { useState } from 'react'
import TaskCard from './TaskCard';
import { Task } from '@/lib/types';

const TaskList = () => {


  const [tasks, setTasks] = useState<Task[]>([
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
          onEdit={() => console.log('Edit Task')}
          onComplete={() => console.log('Complete Task')}
        />
      ))}
    </div>
  )
}

export default TaskList