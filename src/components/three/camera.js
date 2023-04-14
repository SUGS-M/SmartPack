import * as THREE from 'three'
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
);
camera.position.set(300,500,300)

export default camera;