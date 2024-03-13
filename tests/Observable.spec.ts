// PRUEBAS PARA LA INTERFAZ DE OBSERVABLE

import 'mocha';
import { expect } from 'chai';
import { Observable } from '../src/Observable.js';

// pruebas para la interfaz observable
describe('Observable interface', () => {
  // prueba para el metodo subscribe
  it('should have a subscribe method', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.subscribe).to.be.a('function');
  });
  // prueba para el metodo unsubscribe
  it('should have an unsubscribe method', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.unsubscribe).to.be.a('function');
  });
  // prueba para el metodo notify
  it('should have a notify method', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.notify).to.be.a('function');
  });
  // Comprobamos que sea generica
  it('should be generic', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.subscribe).to.be.a('function');
  });
  // comprobamos que no devuelven tipos de datos incorrectos
  it('should not return incorrect data types', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.subscribe).to.not.be.a('string');
  });
  // verificamos que subscribe no puede ser un numero
  it('should not allow subscribe to be a number', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.subscribe).to.not.be.a('number');
  });
  // verificar que subscribe no puede ser un string
  it('should not allow subscribe to be a string', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.subscribe).to.not.be.a('string');
  });
  // comprobar que no devuelven tipos incorrectos
  it('should not return incorrect data types', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.unsubscribe).to.not.be.a('string');
    expect(observable.notify).to.not.be.a('string');
    expect(observable.unsubscribe).to.not.be.a('number');
    expect(observable.notify).to.not.be.a('number');
    expect(observable.unsubscribe).to.not.be.a('boolean');
    expect(observable.notify).to.not.be.a('boolean');
    expect(observable.unsubscribe).to.not.be.a('null');
  });
  // verificar que unsubscribe no puede ser un string
  it('should not allow unsubscribe to be a string', () => {
    const observable: Observable<number> = {
      subscribe(observer) {
        return observer;
      },
      unsubscribe(observer) {
        return observer;
      },
      notify(event) {
        return event;
      },
    };
    expect(observable.unsubscribe).to.not.be.a('string');
  });
});