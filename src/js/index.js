

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
        console.log(App.getVersion());
    }

    static getVersion() {
        return {
            version: 'REPLACE_VERSION',
        };
    }
}

export default App;
