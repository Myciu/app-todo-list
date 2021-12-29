import { primitive, raw, serializable } from 'serializr';

export class ApiModel<T = any> {
  @serializable(primitive())
  status: string;

  @serializable(raw()) 
  data?: T[];
}
