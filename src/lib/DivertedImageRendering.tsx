import React from 'react'
import RenderSvg from './RenderSvg'

interface DivertedImageRenderingProps {
  url: string
}

function DivertedImageRendering({ url }: DivertedImageRenderingProps) {
  const reg = new RegExp('\.svg$', 'i');
  if (reg.test(url)) {
    return <div style={{ width: '100%' }}><RenderSvg url={url} /></div>
  }
  return <img src={url} alt="image" style={{ width: '100%' }} />
}

export default DivertedImageRendering;