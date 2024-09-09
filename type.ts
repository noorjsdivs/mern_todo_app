export interface Todo {
    _id:string;
    todo:string;
}

export interface TodoState{
    todo:{
        todoList:Todo[];
    }
}