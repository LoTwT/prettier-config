import { Config } from "prettier"
import SxzzConfig from "@sxzz/prettier-config"

const config: Config = {
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: false,
  trailingComma: "all",
  semi: false,
  endOfLine: "lf",
  overrides: SxzzConfig?.overrides ?? [],
}

export default config
