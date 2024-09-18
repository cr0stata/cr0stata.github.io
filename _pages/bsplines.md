---
layout: splash
permalink: /research/testing/bsplines/
hidden: true
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>B-Spline Generator</title>
  <style>
    canvas { border: 1px solid black; cursor: crosshair; }
    #controls { margin-top: 10px; }
  </style>
</head>
<body>
  <h1>B-Spline Generator</h1>
  <canvas id="bsplineCanvas" width="600" height="400"></canvas>
  <div id="controls">
    <button id="generate">Generate B-Spline</button>
    <button id="reset">Reset</button>
  </div>

  <script src="../../../assets/js/splines/bspline.js"></script>
</body>
</html>

