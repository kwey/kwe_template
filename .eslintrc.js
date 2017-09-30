module.exports ={
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "amd": true,
        "es6":true,
    },
    "extends": "airbnb",
    "parserOptions": {
        // ECMAScript 版本
        "ecmaVersion": 6,
        "sourceType": "module",//module
        // 想使用的额外的语言特性:
        "ecmaFeatures": {
            // 允许在全局作用域下使用 return 语句
            "globalReturn":true,
            // impliedStric
            "impliedStrict":true,
            // 启用 JSX
            "jsx":true
        }
    },
    "rules": {
        "indent": ["error", 4],                 // 使用4个空格缩进
        "quotes": ["error", "single"],          // 使用单引号
        "linebreak-style": ["off"],             // 关闭换行结束符检测
        "semi": ["error", "always"],
        // 始终保持封号
        "comma-dangle": ["error", "always"],    // 禁止使用拖尾逗号
        "no-unused-expressions": ["error", {    // 禁止未使用过的表达式
            "allowShortCircuit": true,          // 允许 &&
            "allowTernary": true                // 允许三元运算
        }],
        "no-console": ["off"],                  // 不检测 console
        "no-trailing-spaces": ["error", {       // 禁用行尾空白
            "skipBlankLines": true              // 允许空行行尾空白
        }],
        "no-cond-assign": ["error", "always"],  // 禁止在条件语句中出现赋值操作符
        "no-underscore-dangle": ["off"],        // 允许使用下划线作为私有变量起始

        // others
        "jsx-a11y/href-no-hash": ["off"]

    }
};