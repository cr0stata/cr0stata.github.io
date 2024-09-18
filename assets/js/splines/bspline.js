const canvas = document.getElementById('bsplineCanvas');
const ctx = canvas.getContext('2d');
const controlPoints = [];
const degree = 3; // Cubic B-spline
let draggingPoint = null;

canvas.addEventListener('mousedown', (event) => {
  const { x, y } = getMousePosition(event);
  const point = findControlPoint(x, y);

  if (point) {
    draggingPoint = point;
  } else {
    controlPoints.push({ x, y });
  }

  draw();
});

canvas.addEventListener('mousemove', (event) => {
  if (draggingPoint) {
    const { x, y } = getMousePosition(event);
    draggingPoint.x = x;
    draggingPoint.y = y;
    draw();
  }
});

canvas.addEventListener('mouseup', () => {
  draggingPoint = null;
});

canvas.addEventListener('mouseleave', () => {
  draggingPoint = null;
});

document.getElementById('generate').addEventListener('click', drawBSpline);
document.getElementById('reset').addEventListener('click', resetCanvas);

function getMousePosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function findControlPoint(x, y) {
  return controlPoints.find(point => {
    const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
    return distance < 10; // Check if the click is near enough to a control point
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawControlPoints();
  drawBSpline();
}

function drawControlPoints() {
  ctx.fillStyle = 'blue';
  controlPoints.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawBSpline() {
  if (controlPoints.length < degree + 1) return;

  const splinePoints = generateBSpline(controlPoints, degree, 100);

  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(splinePoints[0].x, splinePoints[0].y);

  splinePoints.forEach(point => {
    ctx.lineTo(point.x, point.y);
  });

  ctx.stroke();
}

function generateBSpline(controlPoints, degree, numSegments) {
  const points = [];
  const knots = generateKnots(controlPoints.length, degree);

  for (let t = 0; t <= 1; t += 1 / numSegments) {
    points.push(deBoor(controlPoints, degree, knots, t));
  }

  return points;
}

function generateKnots(numControlPoints, degree) {
  const knots = [];
  for (let i = 0; i < numControlPoints + degree + 1; i++) {
    if (i <= degree) knots.push(0);
    else if (i >= numControlPoints) knots.push(1);
    else knots.push((i - degree) / (numControlPoints - degree));
  }
  return knots;
}

function deBoor(controlPoints, degree, knots, t) {
  const n = controlPoints.length - 1;
  const d = controlPoints.map(p => ({ ...p }));

  for (let r = 1; r <= degree; r++) {
    for (let i = n; i >= r; i--) {
      const alpha = (t - knots[i]) / (knots[i + degree + 1 - r] - knots[i]);
      d[i].x = (1 - alpha) * d[i - 1].x + alpha * d[i].x;
      d[i].y = (1 - alpha) * d[i - 1].y + alpha * d[i].y;
    }
  }

  return d[n];
}

function resetCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  controlPoints.length = 0;
  draw();
}
