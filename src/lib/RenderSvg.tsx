import React, { useEffect, useState } from 'react';

interface SvgInlineProps {
  url: string
}
const RenderSvg = ({url}: SvgInlineProps) => {
  const [svg, setSvg] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true))
  }, [url]);

  return (
    <div 
      className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${isErrored ? 'svgInline--errored' : ''}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default RenderSvg;
