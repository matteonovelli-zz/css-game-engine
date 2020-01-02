class GameObject {
  constructor (elementId) {
    this.elementRef = document.getElementById(elementId);
  }

  update (deltatime) {}

  render () {}
}

export { GameObject };
