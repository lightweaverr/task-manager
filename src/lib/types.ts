

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 1 | 2 | 3 | 4 | 5;
  status: 'pending' | 'finished';
  completed: boolean;
}