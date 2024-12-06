export interface ProductsTypes {
  id: number | null;
  title: string | undefined;
  price: number | null;
  description: string | null;
  category: string | null;
  image: string | undefined;
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
