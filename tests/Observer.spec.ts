// PRUEBASS PARA LA INTERFAZ DE OBSERVER

import 'mocha';
import { expect } from 'chai';
import { Observer } from '../src/Observer.js';

// pruebas para la interfaz observer
describe('Observer interface', () => {
  // prueba para el metodo update
  it('should have an update method', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.be.a('function');
  });
  // Comprobamos que sea generica
  it('should be generic', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.be.a('function');
  });
  // comprobamos que no devuelven tipos de datos incorrectos
  it('should not return incorrect data types', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('string');
  });
  // verificamos que update no puede ser un numero
  it('should not allow update to be a number', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('number');
  });
  // verificamos que update no puede ser un string
  it('should not allow update to be a string', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('string');
  });
  // verificamos que update no puede ser un boolean
  it('should not allow update to be a boolean', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('boolean');
  });
  // verificamo que contiene una funcion
  it('should contain a function', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.be.a('function');
  });
  // verificamos que update no puede ser null
  it('should not allow update to be null', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('null');
  });
  // verificamos que update no puede ser undefined
  it('should not allow update to be undefined', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('undefined');
  });
  // verificamos que update no puede ser un objeto
  it('should not allow update to be an object', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('object');
  });
  // verificamos que son de tipo number
  it('should be of type number', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.be.a('function');
  });
  // verificamos que no puede ser un array
  it('should not allow update to be an array', () => {
    const observer: Observer<number> = {
      update(event) {
        return event.data;
      },
    };
    expect(observer.update).to.not.be.a('array');
  });
});