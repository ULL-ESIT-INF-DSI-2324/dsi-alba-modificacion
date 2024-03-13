import { Observer } from './Observer.js';
import { Event } from './Event.js';

/**
 * Interfaz observable
 * Se encarga de definir los metodos que se van a utilizar.
 * @param T Tipo de dato que se va a enviar
 * @function subscribe Metodo que se encarga de agregar un observador
 * @function unsubscribe Metodo que se encarga de eliminar un observador
 * @function notify Metodo que se encarga de notificar a los observadores
 */
export interface Observable<T> {
  /**
   * Metodo que se encarga de agregar un observador
   * @param observer Observador que se va a agregar
   */
  subscribe(observer: Observer<T>): void;

  /**
   * Metodo que se encarga de eliminar un observador
   * @param observer Observador que se va a eliminar
   */
  unsubscribe(observer: Observer<T>): void;
  /**
   * Metodo que se encarga de notificar a los observadores
   * @param event Evento que se va a notificar
   */
  notify(event: Event<T>): void;
}