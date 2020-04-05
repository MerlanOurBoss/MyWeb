import {Product} from './Product';
export interface User {
  id: number;
  login: string;
  password: string;
  liked: Product[];
  myOrders: Product[];
}
