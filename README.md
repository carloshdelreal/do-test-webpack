# 👷 Durable Objects Counter template

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- Modules (commonjs modules to be specific)
- Webpack
- Wrangler

Worker code is in `src/`. The Durable Object `Counter` class is in `src/counter.js`, and the eyeball script is in `index.js`.

Webpack is configured to output a bundled ES Module to `dist/index.mjs`.

This project uses a shim ES module at `src/shim.mjs` that imports the commonjs bundle, and re-exports it. This is necessary because commonjs does not support named exports, and the only way to export a durable object class is using named exports.

On your first publish, you must use `wrangler publish --new-class` to allow the Counter class to implement Durable Objects.

## Deploy Worker with Durable Object (Notes)

```bash
wrangler dev // does not work
```

to deploy the worker you should

```bash
wrangler publish --new-class NameOfTheDoClass
```
