import config from "./index"
import type { Config } from "prettier"

export const defineConfig = (c: Config): Config => {
  const { overrides, ...rest } = c

  return {
    ...config,
    ...rest,
    overrides: [...(config.overrides ?? []), ...(overrides ?? [])],
  }
}
