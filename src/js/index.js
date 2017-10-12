

import './../css/common/index.less';
import './../css/components/index.less';

import Demo from './components/index';

class App {
    constructor(config) {
        this.config = config;
        this.init();
        return this;
    }

    init() {
        this.d = new Demo(this.config);
    }
}

export default App;
