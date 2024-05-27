import type { Config } from "prettier"
import config from "./index"

export function defineConfig(c: Config): Config {
  const { overrides, ...rest } = c

  return {
    ...config,
    ...rest,
    overrides: [...(config.overrides ?? []), ...(overrides ?? [])],
  }
}
