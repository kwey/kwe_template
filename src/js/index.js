

import Demo from './components/index';

class App {
    constructor(config) {
        this.config = config;
        this.init();
        return this;
    }

    init() {
        return new Demo(this.config);
    }
}

export default App;
