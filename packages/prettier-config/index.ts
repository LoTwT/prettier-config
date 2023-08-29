import { Config } from "prettier"
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
}

export default config
