import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x252A34);

    camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 8;
    camera.position.y = 1;
    camera.position.z = 10;

    const hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);

    const directionalLight = new THREE.DirectionalLight(0xffffff,100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    const light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    scene.add(light);
    const light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    scene.add(light2);
    const light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    scene.add(light3);
    const light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,500);
    scene.add(light4);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setSize(800,400);
    //document.body.appendChild(renderer.domElement);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.addEventListener('change', renderer);

    let loader = new GLTFLoader();
    loader.load('../../../assets/js/three/euclid.glb', function(gltf){
      const car = gltf.scene.children[0];
      console.log('car: ', car);
      car.scale.set(0.1,0.1,0.1);
      scene.add(car);
      animate();
    });
  }
  function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  init();
