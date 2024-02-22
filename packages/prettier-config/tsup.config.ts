import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["index.ts", "config.ts"],
  format: ["esm", "cjs"],
  clean: true,
  target: "esnext",
  dts: true,
  cjsInterop: true,
  // https://github.com/egoist/tsup/commit/9b813620a884f5b780346a240c51ead321227bce
  splitting: true,
  platform: "neutral",
})
