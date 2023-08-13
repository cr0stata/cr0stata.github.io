---
layout: single
permalink: /research/testing/three/
hidden: true
---

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>3D Model Embedding</title>
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
</head>
<body>
    <script>
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        var loader = new THREE.GLTFLoader();
        loader.load('../../../assets/js/three/Euclid.glb', function(gltf) {
            var model = gltf.scene;
            scene.add(model);
        });
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();
    </script>
</body>
</html>
