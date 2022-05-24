# renderSvg

This library helps you render svg in a react.

### install
```
npm i @yoondumbo/render-svg
```
or

```
yarn add @yoondumbo/render-svg
```

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
#### or

DivertedImageRendering is available if the image extension is not svg.
This package helps you render generic img elements if they are not svg

```tsx
import React from 'react';
import { DivertedImageRendering } from '@yoondumbo/render-svg';

function Example() {
  const urls = ["s3:sample/sample.png", "s3:sample/sample.svg"]
  return urls.map((_, img) => (
    <DivertedImageRendering url={img} key={img} />
  ))
}
```