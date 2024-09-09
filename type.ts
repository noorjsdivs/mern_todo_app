export interface TodoType {
    title: string;
    description: string;
    compleated: boolean;
    date?: string
  }

 export interface TodoStateType {
    todoList: TodoType[];
 }