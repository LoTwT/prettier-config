import { type Config } from "prettier"
import SxzzConfig from "@sxzz/prettier-config"

const config: Config = {
  ...SxzzConfig,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: false,
  trailingComma: "all",
  semi: false,
  endOfLine: "lf",
  overrides: [
    ...(SxzzConfig?.overrides ?? []),
    {
      files: "*.json5",
      options: {
        trailingComma: "none",
      },
    },
  ],
}

export { Config }
export default config
