// Laboratorio TDD: carrito de compras
// Escribe aquí el código SOLO después de tener una prueba en rojo.

export class Carrito {
  constructor() {
    this.productos = [];
  }

  agregar(nombre, precio, cantidad = 1) {
    if (precio <= 0) {
      throw new Error("El precio debe ser mayor que cero");
    }

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      throw new Error("La cantidad debe ser un entero positivo");
    }

    const existente = this.productos.find(
      (producto) => producto.nombre === nombre,
    );

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.productos.push({
        nombre,
        precio,
        cantidad,
      });
    }
  }

  agregarProducto(nombre, precio) {
    this.agregar(nombre, precio, 1);
  }

  cantidadDeItems() {
    return this.productos.reduce(
      (suma, producto) => suma + producto.cantidad,
      0,
    );
  }

  subtotal() {
    return this.productos.reduce(
      (suma, producto) => suma + producto.precio * producto.cantidad,
      0,
    );
  }
}
