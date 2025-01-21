import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import {  Edit2, CheckCircle } from 'lucide-react';


interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 1 | 2 | 3 | 4 | 5;
  status: 'pending' | 'finished';
  completed: boolean;
}
interface TaskCardProps {
  task: Task;
  onEdit: (id: string) => void;
  onComplete: (id: string) => void;
}

// Task Card Component
const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onComplete }) => {
  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 1: return 'bg-red-100 text-red-800';
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-yellow-100 text-yellow-800';
      case 4: return 'bg-blue-100 text-blue-800';
      case 5: return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'pending' 
      ? 'bg-purple-100 text-purple-800' 
      : 'bg-teal-100 text-teal-800';
  };

  return (
    <Card className="w-full max-w-[300px] mb-4 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col space-y-2 pb-2">
        <div className="flex items-start justify-between">
          <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
            P{task.priority}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {task.description && (
          <p className={`text-sm text-gray-600 ${task.completed ? 'line-through' : ''}`}>
            {task.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onEdit(task.id)}
        >
          <Edit2 className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button 
          variant={task.completed ? "outline" : "default"}
          size="sm" 
          onClick={() => onComplete(task.id)}
        >
          <CheckCircle className="h-4 w-4 mr-1" />
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard