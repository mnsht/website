import { useRef, useEffect } from 'react';
import { Box } from '@rebass/emotion';

import useWindowSize from './resize';
import createBackground from './background';

export default ({ children, style, ...props }) => {
  const size = useWindowSize();
  const svgContainer = useRef(null);

  useEffect(() => {
    createBackground(svgContainer.current, {
      amplitudeX: 100,
      amplitudeY: 10,
      lines: 20,
      gradient: ['#231F3C', '#553455', '#965167', '#C3706B', '#E9A36C'],
      smoothness: 2,
      offsetX: 0,
      crazyness: true,
      fill: true,
      stroke: 0
    });
  }, [svgContainer.current, size]);

  const svgStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1
  };

  return (
    <Box {...props} style={{ position: 'relative', ...style }}>
      <svg ref={svgContainer} width="100%" height="100%" style={svgStyles} />
      {children}
    </Box>
  );
};
