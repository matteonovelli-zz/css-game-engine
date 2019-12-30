class GameObject {
  constructor () {
    this.lastUpdate = performance.now();
    setInterval(() => {
      const now = performance.now();
      const deltatime = now - this.lastUpdate;
      this.lastUpdate = now;
      this.update(deltatime);
      this.render();
    }, 0);
  }

  update (deltatime) {}

  render () {}
}

export { GameObject };
