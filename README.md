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
