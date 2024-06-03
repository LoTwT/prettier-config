# @ayingott/prettier-config

[![@ayingott/prettier-config](https://img.shields.io/npm/v/@ayingott/prettier-config.svg)](https://npmjs.com/package/@ayingott/prettier-config)

My personal taste of the prettier config.

## Usage

```bash
ni -D @ayingott/prettier-config
```

### With all out-of-box features

```js
// prettier.config.js
import config from "@ayingott/prettier-config"

export default config
```

```json
// package.json
{
  "prettier": "@ayingott/prettier-config"
}
```

### Customize config

```js
// prettier.config.js
// @ts-check
import { defineConfig } from "@ayingott/prettier-config/config"

export default defineConfig({
  // custom configs
})
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
