export class Shape {
  protected color: string;
  protected area: number = 1.0;
  protected base: number = 1.0;
  protected width: number = 1.0;
  protected height: number = 1.0;

  constructor(color: string = "") {
    this.color = color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  setArea(area: number): void {
    this.area = area;
  }

  setBase(base: number): void {
    this.base = base;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  toString(): string {
    return `Shape[color=${this.color}]`;
  }

  getArea(): number {
    console.log("Shape unknown! Cannot compute area!");
    return 0;
  }

  displayShapeName(): void {
    console.log("I am a Shape.");
  }
}

export class Circle extends Shape {
  protected radius: number;
  private readonly PI: number = Math.PI;

  constructor(radius: number, height: number = 0) {
    super();
    this.radius = radius;
    this.height = height;
  }

  getArea(): number {
    this.area = this.PI * Math.pow(this.radius, 2);
    return this.area;
  }

  displayShapeName(): void {
    console.log(`Drawing a Circle of radius ${this.radius}`);
  }

  toString(): string {
    return `Circle[radius=${this.radius}, ${super.toString()}]`;
  }
}

export class Rectangle extends Shape {
  constructor(color: string = "", area: number = 1.0, base: number = 1.0, width: number = 1.0, height: number = 1.0) {
    super(color);
    this.area = area;
    this.base = base;
    this.width = width;
    this.height = height;
  }

  setBase(base: number): void {
    this.base = base;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getArea(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    this.area = this.width * this.height;
    return this.area;
  }

  displayShapeName(): void {
    console.log("I am a Rectangle");
  }

  toString(): string {
    return `Rectangle[height=${this.height}, width=${this.width}, ${super.toString()}]`;
  }
}

export class Triangle extends Shape {
  constructor(color: string = "", area: number = 1.0, base: number = 1.0, width: number = 1.0, height: number = 1.0) {
    super(color);
    this.area = area;
    this.base = base;
    this.width = width;
    this.height = height;
  }

  setBase(base: number): void {
    this.base = base;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }

  displayShapeName(): void {
    console.log("I am a Triangle");
  }

  toString(): string {
    return `Triangle[base=${this.base}, height=${this.height}, ${super.toString()}]`;
  }
}

export class Cylinder extends Circle {
  private readonly PI: number = Math.PI;

  constructor(radius: number, height: number = 0) {
    super(radius, height);
  }

  getVolume(): number {
    return (this.PI * Math.pow(this.radius, 2)) * this.height;
  }

  getSurfaceArea(): number {
    return 2.0 * Math.PI * this.radius * this.height;
  }

  displayShapeName(): void {
    console.log(`Drawing a Cylinder for radius ${this.radius}`);
  }

  toString(): string {
    return `Cylinder[radius=${this.radius}, height=${this.height}]`;
  }
}