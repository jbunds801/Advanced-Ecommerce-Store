export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
}

export type Category = string;


export interface User {
  id?: string;
  name: string;
  email: string;
}
