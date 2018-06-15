# 🎞 render-in-place

Render an [ejs](https://npmjs.com/package/ejs) templated file, overwriting it with the result.

# Usage

## Import

This module exposes a function as its `default` export.

### CommonJS

```javascript
const render = require('render-in-place').default;

render(...)
```

### TypeScript

With `allowSyntheticDefaultImports`

```typescript
import render from 'render-inplace';

render(...)
```

Without `allowSyntheticDefaultImports`

```typescript
import { default as render } from 'render-in-place';

render(...)

// or

import * as rip from 'render-in-place';

rip.render(...)
```

## Example

```typescript
import render from 'render-in-place';

render(
    '/path/to/template', // path to template file
    { data: { to: 'render' } }, // data passed to template
    {
        read: {}, // config passed to ejs reading file
        write: {}, // config passed to fs when writing file
    },
)
```

# Documentation

## `render(path: string, data: object, config: object)`

### `path`

The absolute path to your template file.

### `data`

Any data to pass off to the template when rendering. This 
value is provided directly to `ejs` when rendering your file.

### `config`

Extra configuration provided to `ejs.renderFile` or 
`fs.writeFile`.

#### `config.read`

Configuration passed to `ejs.renderFile`.

#### `config.write`

Configuration passed to `fs.writeFile`.
