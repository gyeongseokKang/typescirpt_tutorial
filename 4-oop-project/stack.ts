interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private length?: number) {}

  get size() {
    return this._size;
  }
  push(value: string): void {
    if (this.length === this._size) {
      throw new Error("Stack is Full");
    }
    const node: StackNode = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is Empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

let stack: Stack = new StackImpl();
stack.push("a");
stack.push("a");
stack.push("b");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
