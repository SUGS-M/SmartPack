import * as THREE from 'three'
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader'

const scene = new THREE.Scene()

// const rgbeloader = new RGBELoader()
// rgbeloader.loadAsync('./texture/2k.hdr').then((texture)=>{
//     texture.mapping = THREE.EquirectangularReflectionMapping;
//     scene.background = texture;
//     scene.environment = texture;
// });

//灯光
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
directionalLight.position.set(0,60,0)

export default scene;