import SxzzConfig from "@sxzz/prettier-config"
import type { Config } from "prettier"

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
    {
      files: ["**/typed-router.d.ts"],
      options: {
        requirePragma: true,
      },
    },
  ],
}

export { Config }
export default config
