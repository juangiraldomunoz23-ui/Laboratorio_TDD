// Laboratorio TDD: carrito de compras

const IVA = 0.19;

const CUPONES = {
  DESC10: 0.1,
  DESC20: 0.2,
};

export class Carrito {
  constructor() {
    this.productos = [];
    this.cupon = null;
  }

  agregar(nombre, precio, cantidad = 1) {
    if (typeof precio !== "number" || precio <= 0) {
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

  eliminar(nombre) {
    const indice = this.productos.findIndex(
      (producto) => producto.nombre === nombre,
    );

    if (indice === -1) {
      throw new Error("El producto no está en el carrito");
    }

    this.productos.splice(indice, 1);
  }

  aplicarCupon(codigo) {
    if (!Object.hasOwn(CUPONES, codigo)) {
      throw new Error("El cupón no es válido");
    }

    this.cupon = codigo;
  }

  descuento() {
    if (this.cupon === null) {
      return 0;
    }

    return Math.round(this.subtotal() * CUPONES[this.cupon]);
  }

  iva() {
    const baseGravable = this.subtotal() - this.descuento();

    return Math.round(baseGravable * IVA);
  }

  total() {
    return this.subtotal() - this.descuento() + this.iva();
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
