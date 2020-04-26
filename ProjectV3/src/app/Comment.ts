import {Product} from './Product';

export interface Comment {
  product: Product;
  userName: string;
  body: string;
}
