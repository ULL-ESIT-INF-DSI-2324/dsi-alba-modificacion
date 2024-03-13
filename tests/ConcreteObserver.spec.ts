// PRUEBAS PARA LA CLASE CONCRETE OBSERVER

import 'mocha';
import { expect } from 'chai';
import { ConcreteObserver } from '../src/ConcreteObserver.js';

// pruebas para la clase concrete observer
describe('ConcreteObserver class', () => {
  // prueba para el constructor
  it('should have a constructor', () => {
    const observer = new ConcreteObserver(1, 'test');
    expect(observer).to.be.an.instanceOf(ConcreteObserver);
  });
  // prueba para el metodo update
  it('should have an update method', () => {
    const observer = new ConcreteObserver(1, 'test');
    expect(observer.update).to.be.a('function');
  });
  // prueba para el atributo id
  it('should have an id attribute', () => {
    const observer = new ConcreteObserver(1, 'test');
    expect(observer).to.haveOwnProperty('id');
  });
  // prueba para el atributo name
  it('should have a name attribute', () => {
    const observer = new ConcreteObserver(1, 'test');
    expect(observer).to.haveOwnProperty('name');
  });
  // pruebas para la funcion update
  describe('update method', () => {
    // prueba para el metodo update
    it('should receive an event', () => {
      const observer = new ConcreteObserver(1, 'test');
      const event = {
        type: 'test',
        data: 1,
      };
      expect(observer.update(event)).to.be.undefined;
    });
  });
  // prueba para comprobar que el metodo update imprime en consola
  it('should print the event in the console', () => {
    const observer = new ConcreteObserver(1, 'test');
    const event = {
      type: 'test',
      data: 1,
    };
    expect(observer.update(event)).to.be.undefined;
  });
  // comporbamos que implementa la interfaz observer
  it('should implement the Observer interface', () => {
    const observer = new ConcreteObserver(1, 'test');
    expect(observer).to.be.an.instanceOf(ConcreteObserver);
  });
  // comprobamos que no devuelven tipos de datos incorrectos
  it('should not return incorrect data types', () => {
    const observer = new ConcreteObserver(1, 'test');
    const event = {
      type: 'test',
      data: 1,
    };
    expect(observer.update(event)).to.be.undefined;
    expect(observer.update(event)).to.not.be.a('string');
    expect(observer.update(event)).to.not.be.a('number');
    expect(observer.update(event)).to.not.be.a('boolean');
    expect(observer.update(event)).to.not.be.an('object');
  });
  // comprobamos que el metodo update no puede ser un string
  it('should not allow update to be a string', () => {
    const observer = new ConcreteObserver(1, 'test');
    const event = {
      type: 'test',
      data: 1,
    };
    expect(observer.update(event)).to.not.be.a('string');
  });
  // comprobamos que el metodo update no puede ser un numero
  it('should not allow update to be a number', () => {
    const observer = new ConcreteObserver(1, 'test');
    const event = {
      type: 'test',
      data: 1,
    };
    expect(observer.update(event)).to.not.be.a('number');
  });
  
});