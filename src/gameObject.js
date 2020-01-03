class GameObject {
  constructor (elementId, x, y) {
    this.elementRef = document.getElementById(elementId);
    this.init(x, y);
  }

  init (x, y) {
    this.position = { x, y };
  }

  update (deltatime) {}

  render () {
    if (!this.elementRef) { return; }
    this.elementRef.style.display = 'block';
    this.elementRef.style.left = `calc(${Math.trunc(this.position.x) * 2}vh + 1px)`;
    this.elementRef.style.top = `calc(${Math.trunc(this.position.y) * 2}vh + 1px)`;
  }
}

export { GameObject };
