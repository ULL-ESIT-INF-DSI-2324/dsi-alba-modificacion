// INTERFAZ GENERICA DE EVENT

/**
 * Interfaz generica de evento
 * Contiene dos atributos tipo de tipo string y data de tipo T es 
 * decir el tipo de dato que se va a enviar
 * @param T Tipo de dato que se va a enviar
 */
export interface Event<T> {
  type: string;
  data: T;
}