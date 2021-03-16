interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}
type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private length?: number) {}

  get size() {
    return this._size;
  }
  push(value: T): void {
    if (this.length === this._size) {
      throw new Error("Stack is Full");
    }
    const node = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is Empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

let stack: Stack<string> = new StackImpl<string>();
stack.push("a");
stack.push("a");
stack.push("b");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

let stack2: Stack<number> = new StackImpl<number>();
stack2.push(1);
stack2.push(12);
stack2.push(123);
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());
