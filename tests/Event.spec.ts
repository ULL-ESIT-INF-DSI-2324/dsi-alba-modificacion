// PRUEBAS PARA LA INTERFAZ DE EVENT

import 'mocha';
import { expect } from 'chai';
import { Event } from '../src/Event.js';

// pruebas para la interfaz event
describe('Event interface', () => {
  // prueba para el atributo type
  it('should have a type attribute', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.type).to.be.a('string');
  });
  // prueba para el atributo data
  it('should have a data attribute', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.data).to.be.a('number');
  });
  // comprobamos que es una interfaz
  it('should not have a constructor', () => {
    expect(Event).to.not.haveOwnProperty('constructor');
  });
  // Comprobamos que sea generica
  it('should be generic', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.data).to.be.a('number');
  });
  // comprobamos que no devuelven tipos de datos incorrectos
  it('should not return incorrect data types', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.data).to.not.be.a('string');
  });
  // verificamos que type no puede ser un numero
  it('should not allow type to be a number', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.type).to.not.be.a('number');
  });
  // verificamos que data no puede ser un string
  it('should not allow data to be a string', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.data).to.not.be.a('string');
  });
  // verificamos que data no puede ser un boolean
  it('should not allow data to be a boolean', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.data).to.not.be.a('boolean');
  });
  // verificar que no puede ser null
  it('should not allow data to be null', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.data).to.not.be.a('null');
  });
  // verificar que no puede ser undefined
  it('should not allow data to be undefined', () => {
    const event: Event<number> = {
      type: 'test',
      data: 1,
    };
    expect(event.data).to.not.be.a('undefined');
  });
});