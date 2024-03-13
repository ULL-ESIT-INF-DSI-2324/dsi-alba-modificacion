// PRUEBAS PARA LA CLASE GENERIC OBSERVABLE

import 'mocha';
import { expect } from 'chai';
import { GenericObservable } from '../src/GenericObservable.js';
import { Observer } from '../src/Observer.js';

// pruebas para la clase generic observable
describe('GenericObservable class', () => {
  // prueba para el metodo subscribe
  it('should have a subscribe method', () => {
    const observable = new GenericObservable<number>();
    expect(observable.subscribe).to.be.a('function');
  });
  // Comprobamos que sea generica
  it('should not return incorrect data types', () => {
    const observable = new GenericObservable<number>();
    expect(observable.subscribe).to.not.be.a('string');
    expect(observable.subscribe).to.not.be.a('number');
    expect(observable.subscribe).to.not.be.a('boolean');
  });
  // prueba para el metodo unsubscribe
  it('should have an unsubscribe method', () => {
    const observable = new GenericObservable<number>();
    expect(observable.unsubscribe).to.be.a('function');
  });
  // comprobamos que es una funcion
  it('should have a notify method', () => {
    const observable = new GenericObservable<number>();
    expect(observable.notify).to.be.a('function');
  });
  // comporbar que se notifica a los observadores suscritos
  it('should notify all subscribed observers', () => {
    const observable = new GenericObservable<number>();
    const observer1: Observer<number> = {
      update: (event) => {
        expect(event.data).to.equal(42);
      },
    };
    const observer2: Observer<number> = {
      update: (event) => {
        expect(event.data).to.equal(42);
      },
    };
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.notify({ type: 'test', data: 42 });
  });
  // comporbar que se no se notifica a los observadores no suscritos
  it('should not notify unsubscribed observers', () => {
    const observable = new GenericObservable<number>();
    const observer1: Observer<number> = {
      update: () => {
        throw new Error('Observer 1 should not be notified');
      },
    };
    const observer2: Observer<number> = {
      update: (event) => {
        expect(event.data).to.equal(42);
      },
    };
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.unsubscribe(observer1);
    observable.notify({ type: 'test', data: 42 });
  });
  // comprobar que no se notifica a los observadores que se han desuscripto
  it('should not notify unsubscribed observers', () => {
    const observable = new GenericObservable<number>();
    const observer1: Observer<number> = {
      update: () => {
        throw new Error('Observer 1 should not be notified');
      },
    };
    const observer2: Observer<number> = {
      update: (event) => {
        expect(event.data).to.equal(42);
      },
    };
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.unsubscribe(observer1);
    observable.notify({ type: 'test', data: 42 });
  });
  // comporbamos que no devuelven tipos de datos incorrectos
  it('should not return incorrect data types', () => {
    const observable = new GenericObservable<number>();
    expect(observable.subscribe).to.not.be.a('string');
    expect(observable.subscribe).to.not.be.a('number');
    expect(observable.subscribe).to.not.be.a('boolean');
    expect(observable.unsubscribe).to.not.be.a('string');
    expect(observable.unsubscribe).to.not.be.a('number');
    expect(observable.unsubscribe).to.not.be.a('boolean');
    expect(observable.notify).to.not.be.a('string');
    expect(observable.notify).to.not.be.a('number');
    expect(observable.notify).to.not.be.a('boolean');
  });
  // comprorbamos que subscribe no puede ser null
  it('should not allow subscribe to be null', () => {
    const observable = new GenericObservable<number>();
    expect(observable.subscribe).to.not.be.a('null');
  });
  // comprorbamos que unsubscribe no puede ser null
  it('should not allow unsubscribe to be null', () => {
    const observable = new GenericObservable<number>();
    expect(observable.unsubscribe).to.not.be.a('null');
  });
  // comprorbamos que notify no puede ser null
  it('should not allow notify to be null', () => {
    const observable = new GenericObservable<number>();
    expect(observable.notify).to.not.be.a('null');
  });
});