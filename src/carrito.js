// Laboratorio TDD: carrito de compras

export class Carrito {
  constructor() {
    this.productos = [];
  }

  cantidadDeItems() {
    return this.productos.length;
  }

  subtotal() {
    return this.productos.reduce(
      (total, producto) => total + producto.precio,
      0,
    );
  }

  agregarProducto(nombre, precio) {
    this.productos.push({
      nombre,
      precio,
    });
  }
}
