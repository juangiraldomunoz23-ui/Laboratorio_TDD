import { describe, test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { Carrito } from "../src/carrito.js";

describe("Carrito de compras", () => {
  let carrito;

  beforeEach(() => {
    carrito = new Carrito();
  });

  describe("Iteración 1: carrito vacío", () => {
    test("un carrito nuevo no tiene ítems", () => {
      assert.equal(carrito.cantidadDeItems(), 0);
    });

    test("un carrito nuevo tiene subtotal 0", () => {
      assert.equal(carrito.subtotal(), 0);
    });
  });

  describe("Iteración 2: agregar productos", () => {
    test("agregar un producto aumenta la cantidad de ítems", () => {
      carrito.agregarProducto("Mouse", 50000);
      assert.equal(carrito.cantidadDeItems(), 1);
    });

    test("agregar dos productos diferentes aumenta la cantidad de ítems", () => {
      carrito.agregarProducto("Mouse", 50000);
      carrito.agregarProducto("Teclado", 80000);
      assert.equal(carrito.cantidadDeItems(), 2);
    });

    test("el subtotal es la suma de los precios de los productos", () => {
      carrito.agregarProducto("Mouse", 50000);
      carrito.agregarProducto("Teclado", 80000);
      assert.equal(carrito.subtotal(), 130000);
    });
  });
});
