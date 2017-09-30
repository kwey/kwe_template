

class Demo {
    constructor(config) {
        this.config = config;
        this._init();
        return this;
    }

    _init() {
        return `<h1>${this.config.hello}</h1>`;
    }
}

export default Demo;
