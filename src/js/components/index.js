
class Demo {
    constructor(config) {
        this.config = config;
        const wrap = document.querySelector('.demo');
        wrap.innerHTML = this.init();
    }

    init() {
        return `<h1>${this.config.hello}</h1>`;
    }
}

export default Demo;
