import { Event } from './Event.js';

/**
 * Interfaz generica de observador
 * Contiene un metodo que se encarga de recibir un evento
 * @param T Tipo de dato que se va a enviar
 * @function update Metodo que se encarga de recibir un evento
 */
export interface Observer<T> {
  update(event: Event<T>): void;
}