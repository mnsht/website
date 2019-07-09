import tinygradient from 'tinygradient';

/*
  TODO:
  - Figure out a more intelligent way to resize background and potentially remove resize hook file
  - Figure out bottom stroke issue
  - Add some sort of animation or interaction
*/

const createElem = type =>
  document.createElementNS('http://www.w3.org/2000/svg', type);

const createPoints = (overflow, offsetX, rootY, width, settings) => {
  const { crazyness, amplitudeX, amplitudeY } = settings;
  const points = [];

  let x = -overflow + offsetX,
    y = 0,
    upSideDown = 0;

  points.push({ x, y: rootY });

  while (x < width) {
    let value = Math.random() > 0.5 ? 1 : -1;

    if (crazyness) {
      const randomAmp = a => +((Math.random() * a) / 2 + a / 2);

      // Crazyness
      x += randomAmp(amplitudeX);
      y = randomAmp(amplitudeY) * value + rootY;
    } else {
      // Geometric
      upSideDown = !upSideDown;
      value = upSideDown == 0 ? 1 : -1;

      x += amplitudeX;
      y = amplitudeY * value + rootY;
    }

    points.push({ x, y });
  }

  points.push({ x: width + overflow, y: rootY });

  return points;
};

const createPath = (points, color, overflow, height, width, settings) => {
  const { smoothness, fill, stroke } = settings;
  const path = createElem('path');

  if (stroke) {
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', stroke);
    path.setAttribute('fill', 'transparent');
  }

  if (fill) {
    path.setAttribute('fill', color);
  }

  path.setAttribute('class', 'path');

  // First and second points
  let d = `M -${overflow} ${height + overflow} L ${points[0].x} ${points[0].y}`;

  // All middle points
  for (let i = 1; i < points.length - 1; i++) {
    const prevPoint = points[i - 1],
      actualPoint = points[i],
      diffX = (actualPoint.x - prevPoint.x) / smoothness;

    d += ` C ${prevPoint.x + diffX} ${prevPoint.y}, ${actualPoint.x - diffX} ${
      actualPoint.y
    }, ${actualPoint.x} ${actualPoint.y}`;
  }

  // Second to last and last points
  const reversePoints = points.reverse();
  d += ` L ${reversePoints[0].x} ${reversePoints[0].y} L ${width +
    overflow} ${height + overflow}`;

  // Close path
  d += ` Z`;

  path.setAttribute('d', d);

  return path;
};

export default (svg, settings) => {
  // Clear the SVG
  svg.innerHTML = '';

  const width = svg.parentNode.scrollWidth,
    height = svg.parentNode.scrollHeight,
    overflow = Math.abs(settings.lines * settings.offsetX),
    totalPositions = settings.lines,
    colors = tinygradient(settings.gradient);

  // If we are filling, set the SVG background
  if (settings.fill) {
    svg.style.backgroundColor = colors.rgbAt(0);
  }

  for (let i = 0; i <= totalPositions; i++) {
    const points = createPoints(
      overflow,
      settings.offsetX * i,
      +((height / settings.lines) * i),
      width,
      settings
    );

    const path = createPath(
      points,
      colors.rgbAt(i / totalPositions),
      overflow,
      height,
      width,
      settings
    );

    svg.appendChild(path);
  }
};
