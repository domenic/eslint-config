import stylistic from "@stylistic/eslint-plugin";

export default [{
  plugins: {
    "@stylistic": stylistic
  },
  rules: {
    // JavaScript
    "@stylistic/array-bracket-newline": ["error", { multiline: true }],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/array-element-newline": ["error", "consistent"],
    "@stylistic/arrow-parens": ["error", "as-needed"],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/block-spacing": ["error", "always"],
    "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "@stylistic/comma-dangle": ["error", "never"],
    "@stylistic/comma-spacing": "error",
    "@stylistic/comma-style": ["error", "last"],
    "@stylistic/computed-property-spacing": ["error", "never"],
    "@stylistic/curly-newline": "error",
    "@stylistic/dot-location": ["error", "property"],
    "@stylistic/eol-last": "error",
    "@stylistic/exp-list-style": "off", // very fussy, still experimental
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
    "@stylistic/generator-star-spacing": ["error", "after"],
    "@stylistic/implicit-arrow-linebreak": "error",
    "@stylistic/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        CallExpression: { arguments: "first" },
        FunctionExpression: { parameters: "first" },
        ignoredNodes: ["ConditionalExpression"]
      }
    ],
    "@stylistic/indent-binary-ops": "off",
    "@stylistic/key-spacing": [
      "error",
      { beforeColon: false, afterColon: true, mode: "strict" }
    ],
    "@stylistic/keyword-spacing": ["error", { before: true, after: true }],
    "@stylistic/line-comment-position": "off",
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/lines-around-comment": "error",
    "@stylistic/lines-between-class-members": "off",
    "@stylistic/max-len": ["error", 120, { ignoreUrls: true }],
    "@stylistic/max-statements-per-line": ["error", { max: 1 }],
    "@stylistic/multiline-comment-style": ["error", "separate-lines"],
    "@stylistic/multiline-ternary": ["error", "always-multiline"],
    "@stylistic/new-parens": "error",
    "@stylistic/newline-per-chained-call": "off",
    "@stylistic/no-confusing-arrow": "error",
    "@stylistic/no-extra-parens": [
      "error",
      "all",
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ternaryOperandBinaryExpressions: false,
        ignoredNodes: ["MemberExpression[object.type=NewExpression]"]
      }
    ],
    "@stylistic/no-extra-semi": "error",
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/no-mixed-operators": [
      "error",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ]
      }
    ],
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/no-multiple-empty-lines": "error",
    "@stylistic/no-tabs": "error",
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/no-whitespace-before-property": "error",
    "@stylistic/nonblock-statement-body-position": "error",
    "@stylistic/object-curly-newline": ["error", { consistent: true }],
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/object-property-newline": "off",
    "@stylistic/one-var-declaration-per-line": ["error", "initializations"],
    "@stylistic/operator-linebreak": ["error", "after"],
    "@stylistic/padded-blocks": ["error", "never"],
    "@stylistic/padding-line-between-statements": "error",
    "@stylistic/quote-props": ["error", "consistent-as-needed"],
    "@stylistic/quotes": [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: "always" }
    ],
    "@stylistic/rest-spread-spacing": "error",
    "@stylistic/semi": ["error", "always"],
    "@stylistic/semi-spacing": "error",
    "@stylistic/semi-style": "error",
    "@stylistic/space-before-blocks": ["error", "always"],
    "@stylistic/space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    "@stylistic/space-in-parens": ["error", "never"],
    "@stylistic/space-infix-ops": "error",
    "@stylistic/space-unary-ops": ["error", { words: true, nonwords: false }],
    "@stylistic/spaced-comment": ["error", "always"],
    "@stylistic/switch-colon-spacing": "error",
    "@stylistic/template-curly-spacing": ["error", "never"],
    "@stylistic/template-tag-spacing": "error",
    "@stylistic/wrap-iife": ["error", "inside"],
    "@stylistic/wrap-regex": "off",
    "@stylistic/yield-star-spacing": ["error", "after"],

    // JSX (off by default)
    "@stylistic/exp-jsx-props-style": "off",
    "@stylistic/jsx-child-element-spacing": "off",
    "@stylistic/jsx-closing-bracket-location": "off",
    "@stylistic/jsx-closing-tag-location": "off",
    "@stylistic/jsx-curly-brace-presence": "off",
    "@stylistic/jsx-curly-newline": "off",
    "@stylistic/jsx-curly-spacing": "off",
    "@stylistic/jsx-equals-spacing": "off",
    "@stylistic/jsx-first-prop-new-line": "off",
    "@stylistic/jsx-function-call-newline": "off",
    "@stylistic/jsx-indent-props": "off",
    "@stylistic/jsx-max-props-per-line": "off",
    "@stylistic/jsx-newline": "off",
    "@stylistic/jsx-one-expression-per-line": "off",
    "@stylistic/jsx-pascal-case": "off",
    "@stylistic/jsx-quotes": "off",
    "@stylistic/jsx-self-closing-comp": "off",
    "@stylistic/jsx-tag-spacing": "off",
    "@stylistic/jsx-wrap-multilines": "off",

    // TypeScript (off by default)
    "@stylistic/member-delimiter-style": "off",
    "@stylistic/type-annotation-spacing": "off",
    "@stylistic/type-generic-spacing": "off",
    "@stylistic/type-named-tuple-spacing": "off"
  }
}];
