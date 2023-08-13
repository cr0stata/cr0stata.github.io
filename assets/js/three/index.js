import { GLTFLoader } from './GLTFLoader.js';

const loader = new GLTFLoader(); 
loader.load( './Euclid.glb', function ( gltf )  
    { 
    scene.add( gltf.scene ); }, undefined, function ( error ) { console.error( error );
    } );