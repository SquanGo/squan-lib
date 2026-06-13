# squan-lib

master library for squan utilities!!

## Install (npm)

```sh
npm install squanlib
```

```js
import SquanLib from 'squanlib';

const sq = new SquanLib();
```

## Use from a CDN

### ES module (jsDelivr / unpkg)

```html
<script type="module">
  import SquanLib from 'https://cdn.jsdelivr.net/npm/squanlib/+esm';
  const sq = new SquanLib();
</script>
```

### Plain `<script>` global

The browser build exposes the class as `window.squanlib`:

```html
<script src="https://cdn.jsdelivr.net/npm/squanlib/dist/squanlib.umd.min.js"></script>
<script>
  const sq = new squanlib();
</script>
```

unpkg works the same way: `https://unpkg.com/squanlib/dist/squanlib.umd.min.js`.
Pin a version for production, e.g. `squanlib@1.0.0`.

## Build

The browser bundles in `dist/` are generated from `squanlib.js`:

```sh
npm run build
```

This runs automatically before `npm publish` (`prepublishOnly`), so the CDN
always serves a build matching the published source.
