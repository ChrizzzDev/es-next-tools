export class Deque<T> {
  private items: T[] = [];

  // Agregar un elemento al frente
  addFront(item: T): void {
    this.items.unshift(item);
  }

  // Agregar un elemento al final
  addBack(item: T): void {
    this.items.push(item);
  }

  // Eliminar un elemento del frente
  removeFront(): T | undefined {
    return this.items.shift();
  }

  // Eliminar un elemento del final
  removeBack(): T | undefined {
    return this.items.pop();
  }

  // Ver el elemento del frente
  peekFront(): T | undefined {
    return this.items[0];
  }

  // Ver el elemento del final
  peekBack(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Comprobar si está vacío
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Tamaño del deque
  size(): number {
    return this.items.length;
  }
}