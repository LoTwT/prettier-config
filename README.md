# prettier-config

[![@ayingott/prettier-config](https://img.shields.io/npm/v/@ayingott/prettier-config.svg)](https://npmjs.com/package/@ayingott/prettier-config)

## features

- useTabs: false,
- tabWidth: 2,
- printWidth: 80,
- singleQuote: false,
- trailingComma: "all",
- semi: false,
- endOfLine: "lf",

### json5

- trailingComma: "none"

## Usage

```bash
pnpm add -D @ayingott/prettier-config
```

### With all out-of-box features

```js
// prettier.config.js
import prettierConfig from "@ayingott/prettierConfig-config"

export default prettierConfig
```

```json
// package.json
{
  "prettier": "@ayingott/prettier-config"
}
```

## VSCode

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  }
}
```

## Thanks

- [@sxzz/prettier-config](https://github.com/sxzz/prettier-config)

## License

[MIT](./LICENSE)
