export interface Todo {
    id: number;
    title: string;
    description: string;
    category: string;
    completed: boolean;
  }

export type RootState = {
    todos: Todo[]; 
  };
  
  
  