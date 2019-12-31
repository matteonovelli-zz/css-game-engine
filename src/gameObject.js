class GameObject {
  constructor (elementId) {
    this.elementRef = document.getElementById(elementId);
    this.lastUpdate = performance.now();
    this.deltatime = 0;
    setInterval(() => {
      const now = performance.now();
      this.deltatime = now - this.lastUpdate;
      this.lastUpdate = now;
      this.update(this.deltatime);
      this.render();
    }, 0);
  }

  update (deltatime) {}

  render () {}
}

export { GameObject };
