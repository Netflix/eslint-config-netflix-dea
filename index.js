module.exports = {
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "jsx": true,
    "modules": true,
    "experimentalObjectRestSpread": true,
    "newTarget": true
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [ "react" ],
  "rules": {
    "array-bracket-spacing": [ 2, "always" ],
    "camelcase": 0,
    "comma-dangle": [ 2, "never" ],
    "comma-style": [ 2, "last" ],
    "curly": [ 2,"multi"],
    "dot-notation": [ 2, { "allowKeywords": true } ],
    "eol-last": 2,
    "eqeqeq": [ 2, "allow-null" ],
    "guard-for-in": 2,
    "indent": [ 2, 2, { "SwitchCase": 1 } ],

    "jsx-quotes": [ 2, "prefer-double" ],

    "key-spacing": 0,
    "new-cap": 0,

    "no-bitwise": 0,
    "no-caller": 2,
    "no-cond-assign": [ 2, "except-parens" ],
    "no-debugger": 2,
    "no-empty": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-parens": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 0,
    "no-multi-str": 2,
    "no-multiple-empty-lines": 2,
    "no-new": 0,
    "no-plusplus": 0,
    "no-proto": 2,
    "no-script-url": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-undef": 2,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": 2,
    "no-var": 2,
    "no-with": 2,

    "object-curly-spacing": [ 2, "always" ],
    "quotes": [ 2, "single", "avoid-escape" ],

    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 1,
    "react/jsx-uses-react": 1,
    "react/wrap-multilines": 2,

    "semi-spacing": 0,
    "semi": [ 2, "never" ],
    "space-before-blocks": [ 2, "always" ],
    "space-before-function-paren": [ 2, { "anonymous": "always", "named": "never" } ],
    "strict": 0,
    "valid-typeof": 2,
    "wrap-iife": [ 2, "inside" ]
  }
}