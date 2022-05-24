import React, { useEffect, useState } from 'react';

interface SvgInlineProps {
  url: string
}
const RenderSvg = ({url}: SvgInlineProps) => {
  const [svgFile, setSvgFile] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(setSvgFile)
      .catch(setIsError)
      .then(() => setIsLoaded(true))
  }, [url]);

  return (
    <div 
      className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${isError ? 'svgInline--errored' : ''}`}
      dangerouslySetInnerHTML={{ __html: svgFile }}
    />
  );
}

export default RenderSvg;
