export interface Todo {
    id: number;
    title: string;
    description: string;
    category: string;
    completed: boolean;
  }

export interface RootState {
    todos: {
      searchTerm: string;
      selectedCategory: string;
      todos: Todo[];
    };
  };

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    id: string;
    type?: "text" | "password" | "number"; 
  }
  
export interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    id: string;
    options: string[];
 }
  
export interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  rows?: number;
 } 