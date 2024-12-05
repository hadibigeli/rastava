
export interface ProductsTypes {
  id: number | null;
  title: string | null;
  price: number | null;
  description: string | null;
  category: string | null;
  image: string | null;
  rating: {
    rate: number | null;
    count: number | null;
  };
}

export interface ProductCreatedType {
  id?: string;
  title?: string;
  price?: number;
  description?: string;
  image?: File | null;
}