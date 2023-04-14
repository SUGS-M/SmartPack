import * as THREE from 'three';
import controls from './controls';
import rendererModule from './renderer';
import scene from './scene'
import camera from './camera';
import stats from './stats';

// const clock = new THREE.Clock();
export default function animate() {
  // 获取间隔时间
  // const delta = clock.getDelta();
  //控制器
  controls.update();
  //帧率检测器
  stats.update()
  //
  requestAnimationFrame(animate)
  // 使用渲染器渲染相机看这个场景的内容渲染出来
  rendererModule.renderer.render(scene, camera);
  rendererModule.css3drender.render(scene, camera);
}

// export default animate;