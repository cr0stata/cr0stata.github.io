import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x252A34);

    //camera = new THREE.PerspectiveCamera(15,window.innerWidth/window.innerHeight,1,2000);
    ////camera.rotation.y = 90/180*Math.PI;
    //camera.position.x = 0;
    //camera.position.y = 1000;
    //camera.position.z = -600;

    const aspect = 1;
    const d = 2000; // Adjust this value as needed to zoom in/out
    camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 0.001, 10000);
    camera.position.set(800, 800, 800); // Adjust these values as needed
    camera.lookAt(new THREE.Vector3(800, 800, 800));

    const hlight = new THREE.AmbientLight (0x404040,50);
    scene.add(hlight);

    const directionalLight = new THREE.DirectionalLight(0xffffff,70);
    directionalLight.position.set(1,0,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    //const light = new THREE.PointLight(0xc4c4c4,10);
    //light.position.set(0,300,500);
    //scene.add(light);
    //const light2 = new THREE.PointLight(0xc4c4c4,10);
    //light2.position.set(500,100,0);
    //scene.add(light2);
    //const light3 = new THREE.PointLight(0xc4c4c4,10);
    //light3.position.set(0,100,-500);
    //scene.add(light3);
    //const light4 = new THREE.PointLight(0xc4c4c4,10);
    //light4.position.set(-500,300,500);
    //scene.add(light4);

    renderer = new THREE.WebGLRenderer({antialias:true});
    //renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setSize(600,600)
    //document.body.appendChild(renderer.domElement);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.addEventListener('change', renderer);

    let loader = new GLTFLoader();
    loader.load('../../../assets/js/three/euclid_latest.glb', function(gltf){
      const car = gltf.scene.children[0];
      console.log('car: ', car);
      car.scale.set(1,1,1);
      scene.add(car);
      animate();
    });
  }
  function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  init();
