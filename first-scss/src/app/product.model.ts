export interface product {
    name: string;
    price: number;
    imag: string;
    category?: string; //El signo de pregunta indica que puede ser opcional tener una categoria
}