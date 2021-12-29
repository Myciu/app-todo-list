import { alias, optional, primitive, serializable } from "serializr";


export class TodoListModel {
    @serializable(primitive())
    id: string;

    @serializable(optional())
    candidate: string;

    @serializable(optional())
    task: string;
    
    @serializable(alias('is_completed'))
    isCompleted: number;
  }
  
