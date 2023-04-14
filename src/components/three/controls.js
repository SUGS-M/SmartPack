import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import camera from './camera'
import rendererModule from './renderer'

// const controls = new OrbitControls(camera, rendererModule.renderer.domElement)
const controls = new OrbitControls(camera, rendererModule.css3drender.domElement)
controls.enableDamping = true;   //设置控制器阻尼
// controls.autoRotate = true;      //设置自动旋转;

export default controls;