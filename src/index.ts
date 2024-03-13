import { GenericObservable } from './GenericObservable.js';
import { ConcreteObserver } from './ConcreteObserver.js';
import { Event } from './Event.js';
import * as readline from 'readline';

/**
 * Se crea una instancia de readline para poder leer la entrada del usuario
 * y mostrar el menú de opciones
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Se crean instancias de Observable y Observer 
const observable = new GenericObservable<string>();
const observer1 = new ConcreteObserver<string>(1, 'Observer1');
const observer2 = new ConcreteObserver<string>(2, 'Observer2');
// Se suscriben los observadores al observable
observable.subscribe(observer1);
observable.subscribe(observer2);
// Se crean eventos
const events: Event<string>[] = [
  { type: 'Event1', data: 'Event data 1' },
  { type: 'Event2', data: 'Event data 2' },
  { type: 'Event3', data: 'Event data 3' },
  { type: 'Event4', data: 'Event data 4' }
];

/**
 * Función que muestra el menú de opciones y notifica a los observadores
 * Las opciones son:
 * 1. Elegir un evento para notificar a los observadores
 * 2. Desuscribir al Observer1
 * 3. Salir
 */
function menu() {
  console.log('\nChoose an event to notify observers:');
  events.forEach((event, index) => console.log(`${index + 1}. ${event.type}`));
  console.log('5. Unsubscribe Observer1');
  console.log('6. Exit');
  // Se lee la opción del usuario
  rl.question('Enter your choice: ', (choice) => {
    const index = Number(choice) - 1;
    if (index >= 0 && index < events.length) {
      observable.notify(events[index]);
      menu();
    } else if (index === events.length) {
      observable.unsubscribe(observer1);
      console.log('Observer1 unsubscribed');
      menu();
    } else if (index === events.length + 1) {
      rl.close();
    } else {
      console.log('Invalid choice');
      menu();
    }
  });
}

menu();