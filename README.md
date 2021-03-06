# NEXTJS WITH TYPESCRIPT


[nextjs.org - setup](https://nextjs.org/learn/excel/typescript/setup)

[nextjs.org - typescript](https://nextjs.org/docs/basic-features/typescript)
```bash
npx create-next-app name --use-npm --ts
```

## TypeScript
Add [tsconfig.json](https://github.com/anriverax/config-JS/blob/main/tsconfig.json) file => `The tsconfig.json file indicates that you're working TypeScript`

[nextjs.org](https://nextjs.org/learn/excel/typescript/create-tsconfig)

If you’re using npm
```bash
npm install --save-dev typescript @types/react @types/node
```

If you’re using Yarn
```bash
yarn add --dev typescript @types/react @types/node
```

## SASS
[sass](https://nextjs.org/docs/basic-features/built-in-css-support)
```bash
npm install --save-dev sass
```


Customizing Sass Options - (In your next.config.js file)
```bash
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'path')], //path = folder name where its your .sass / .scss files
  },
}
```

# PROJECTS CONFIGURATION - ReactJS and NextJS (optional)

## ESLint
[ESLint](https://www.npmjs.com/package/eslint)

[ESLint-rules](https://eslint.org/docs/rules/)
```bash
npm install eslint --save-dev
```

## ESLint Plugin TypeScript

[ESLint Plugin TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
```bash
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Prettier
[Prettier](https://prettier.io/docs/en/install.html)
```bash
npm install --save-dev --save-exact prettier
```

## ESLint Plugin Prettier
[ESLint Plugin Prettier #1](https://github.com/prettier/eslint-plugin-prettier)

[ESLint Plugin Prettier #2](https://github.com/prettier/eslint-config-prettier)

[ESLint Plugin Prettier #3](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
```bash
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```

## ESLint Plugin React
[ESLint Plugin React](https://www.npmjs.com/package/eslint-plugin-react)
```bash
npm install eslint-plugin-react --save-dev
```

## ESLint Plugin React Hooks
[ESLint Plugin React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
```bash
npm install eslint-plugin-react-hooks --save-dev
```

## ESLint plugin jsx a11y
[ESLint plugin jsx a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
```bash
npm install eslint-plugin-jsx-a11y --save-dev
```

## Import/External Module Folders
[Import/External Module Folders](https://github.com/import-js/eslint-plugin-import/blob/main/README.md#importexternal-module-folders)
```bash
npm install eslint-plugin-import --save-dev
```

## ESLint Import Resolver Typescript
[ESLint Import Resolver Typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)
```bash
npm i --save-dev eslint-import-resolver-typescript
```

## or a single command (only --save-dev)
```bash
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-import-resolver-typescript --save-dev
```
