import type { Config } from "prettier"
// @ts-expect-error no dts
import * as pluginAstro from "prettier-plugin-astro"
import * as pluginTailwindCSS from "prettier-plugin-tailwindcss"

const config: Config = {
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: false,
  trailingComma: "all",
  semi: false,
  endOfLine: "lf",
  proseWrap: "preserve",
  bracketSpacing: true,
  quoteProps: "consistent",
  plugins: [
    {
      ...pluginTailwindCSS,
    },
    {
      ...pluginAstro,
    },
  ],
  overrides: [
    {
      files: [
        "**/node_modules/**",
        "**/dist/**",
        "**/output/**",
        "**/coverage/**",
        "**/temp/**",
        "**/.vitepress/cache/**",
        "**/.nuxt/**",
        "**/.vercel/**",
        "**/.changeset/**",
        "**/.idea/**",
        "**/.output/**",
        "**/.vite-inspect/**",

        "**/CHANGELOG*.md",
        "**/*.min.*",
        "**/LICENSE*",
        "**/__snapshots__",
        "**/auto-import?(s).d.ts",
        "**/components.d.ts",
        "**/typed-router.d.ts",
        "**/pnpm-lock.yaml",
      ],
      options: {
        requirePragma: true,
      },
    },
    {
      files: ["**/jsr.json"],
      options: {
        parser: "json-stringify",
      },
    },
    {
      files: "*.json5",
      options: {
        trailingComma: "none",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}

export { Config }
export default config
