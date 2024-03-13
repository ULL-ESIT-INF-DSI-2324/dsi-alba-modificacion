import { Observer } from './Observer.js';
import { Event } from './Event.js';


/**
 * Clase concreta de observador 
 * Contiene un metodo que se encarga de recibir un evento
 * @param T Tipo de dato que se va a enviar
 * @function update Metodo que se encarga de recibir un evento
 * @param id Identificador del observador
 */
export class ConcreteObserver<T> implements Observer<T> {
  /**
   * Constructor de la clase
   * @param id identificador del observador
   * @param name nombre del observador
   */
  constructor(private id: number, private name: string) {}

  /**
   * Método que se encarga de recibir un evento
   * Para ello, lo que hace es imprimir en consola el evento que recibió
   * @param event evento que se va a recibir
   */
  update(event: Event<T>): void {
    console.log(`Observer ${this.name} (ID: ${this.id}) received event with data:`, event.data);
  }
}