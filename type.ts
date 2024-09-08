export interface Todo{
    id:number;
    todo:string;
    name:string,
    number:string;
    email?:string;
    roll?:string;
}



export interface State{
    name:{
      todo:Todo[]
    }
  }

  export interface TodoITem{
    item:{
      email:string;
    id:number;
    name:string;
    number:string;
    roll:string
    }
    };