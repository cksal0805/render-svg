# renderSvg

This library helps you render svg in a react.

### example
```tsx
import React from 'react';
import { RenderSvg } from  '@yoondumbo/render-svg';

function Example() {
  const url = "s3:sample/sample.svg"
  return (
    <RenderSvg url={url}>
  )
}
```

or

```tsx
import React from 'react';
import { DivertedImageRendering } from '@yoondumbo/render-svg';

function Example() {
  const urls = ["s3:sample/sample.png", "s3:sample/sample.svg"]
  return urls.map((_, img) => (
    <DivertedImageRendering url={img} />
  ))
}
```