import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x252A34);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(700, 700); // Square aspect ratio
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load('../../../assets/js/three/euclid_latest.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);

        // Calculate the bounding box of the model
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());

        // Create the Orthographic Camera
        const aspect = 1; // For square renderer (900x900)
        const d = size * 0.4; // Adjust d based on the size of the model
        camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 0.1, size * 10);

        // Set the camera position and look at the center of the model
        camera.position.set(center.x + d, center.y + d, center.z + d);
        camera.lookAt(center);

        // Update the camera projection matrix after position change
        camera.updateProjectionMatrix();

        // OrbitControls to allow user interaction
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.target.copy(center); // Ensure controls center on the model
        controls.update();
        animate();

    });

    const hlight = new THREE.AmbientLight(0x404040, 50);
    scene.add(hlight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 70);
    directionalLight.position.set(1, 0, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();

