import { Observable } from './Observable.js';
import { Observer } from './Observer.js';
import { Event } from './Event.js';

/**
 * Clase generica Observable para notificar a los observadores
 * @param T Tipo de dato que se va a enviar
 * @function subscribe Metodo que se encarga de agregar un observador
 * @function unsubscribe Metodo que se encarga de eliminar un observador
 * @function notify Metodo que se encarga de notificar a los observadores
 */
export class GenericObservable<T> implements Observable<T> {
  /**
   * Atributo que se encarga de almacenar los observadores
   * @param observers Arreglo de observadores
   */
  private observers: Observer<T>[] = [];

  /**
   * Metodo que se encarga de agregar un observador
   * Para ello, lo que hace es verificar si el observador ya se encuentra en el arreglo
   * si no se encuentra, lo agrega.
   * @param observer Observador que se va a agregar
   * 
   */
  subscribe(observer: Observer<T>): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  /**
   * Método para eliminar un observador
   * Para ello, lo que hace es verificar si el observador se encuentra en el arreglo
   * si se encuentra, lo elimina. SE utiliza el metodo indexOf para buscar el indice
   * Si el index es diferente de -1, se elimina el observador
   * @param observer observador que se va a eliminar
   */
  unsubscribe(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Método que notifica a los observadores
   * Para ello, recorre el arreglo de observadores y llama al metodo update
   * de cada observador
   * @param event evento que se va a notificar
   */
  notify(event: Event<T>): void {
    this.observers.forEach(observer => observer.update(event));
  }
}