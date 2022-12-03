# Image In Image 🔎

This package provides finding image as a part of another image.

## Usage

```
npm i image-in-image
```

## Functions

---

### `findImage(innerImagePath, outerImagePath, innerImageMimeType, outerImageMimeType)`

e.g.

```js
import { findImage } from "image-in-image";

const main = async () => {
  const test = await findImage(
    "build/test/inner.png",
    "build/test/outer.png",
    "image/png",
    "image/png"
  );
  console.log(test);
};

main();
```

Should return

```json
{ "x": 268.5, "y": 161 }
```

---
