import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";
import gsap from "gsap";
import * as THREE from 'three'

import scene from "../scene";
import eventHub from '../../utils/eventHub';
import camera from '../camera'

let floor2Group 
let floor2Tags = []
let floor1Group 
let fighterGroup
let wallGroup
const gltfLoader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./draco/')
gltfLoader.setDRACOLoader(dracoLoader)
//根据这一系列的点创建曲线->曲线运动
const curve1 = new THREE.CatmullRomCurve3(
  [
    // x: -16.65001678466797, y: 0.14946502447128296, z: 206.70933532714844   +50
    new THREE.Vector3(-16.65001678466797, 0.14946502447128296, 206.70933532714844),
    new THREE.Vector3(34, 0.14946502447128296, 206.70933532714844),
    new THREE.Vector3(84.65001678466797, 0.14946502447128296, 206.70933532714844),
    new THREE.Vector3(134.65001678466797, 0.14946502447128296, 206.70933532714844),
    new THREE.Vector3(134.65001678466797, 0.14946502447128296, 156.70933532714844),
    new THREE.Vector3(134.65001678466797, 0.14946502447128296, 106.70933532714844),
    new THREE.Vector3(84.65001678466797, 0.14946502447128296, 106.70933532714844),
    new THREE.Vector3(34, 0.14946502447128296, 0.14946502447128296, 106.70933532714844),
    new THREE.Vector3(-16.65001678466797, 0.14946502447128296, 106.70933532714844),
    new THREE.Vector3(-66.65001678466797, 0.14946502447128296, 106.70933532714844),
    new THREE.Vector3(-116.65001678466797, 0.14946502447128296, 106.70933532714844),
    new THREE.Vector3(-116.65001678466797, 0.14946502447128296, 156.70933532714844),
    new THREE.Vector3(-116.65001678466797, 0.14946502447128296, 206.70933532714844),
    new THREE.Vector3(-66.65001678466797, 0.14946502447128296, 206.70933532714844),
    new THREE.Vector3(-16.65001678466797, 0.14946502447128296, 206.70933532714844),
  ],
  true
);
const curve2 = new THREE.CatmullRomCurve3(
  [
    // x: -16.65001678466797, y: 0.14946502447128296, z: 206.70933532714844   +50
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, 206.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, 156.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, 106.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, 56.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, 6.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, -6.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, -56.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, -106.70933532714844),
    new THREE.Vector3(-116.65001678466797, 50.14946502447128296, -156.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, -156.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, -106.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, -56.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, -6.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, 6.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, 56.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, 106.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, 156.70933532714844),
    new THREE.Vector3(-116.65001678466797, 150.14946502447128296, 206.70933532714844),
  ],
  true
);
export default function createCity() {
    // let floor2Group 
    // let floor2Tags = []
    let array = ["小型会议室", "核心科技室", "科技展台", "设计总监办公室"];
    gltfLoader.load('./model/floor2.glb', (gltf)=>{
        floor2Group = gltf.scene
        console.log('floor2Group',floor2Group)
        gltf.scene.traverse((child)=>{
          if ( child.isMesh ) { 
            child.material.emissiveIntensity = 15;                     
          }
            if(child.isObject3D){
                if (array.indexOf(child.name) != -1){
                    const css3dObject = createTag(child);
                    css3dObject.visible = false;
                    floor2Tags.push(css3dObject);
                    floor2Group.add(css3dObject)
                }
            }
        })
        floor2Group.visible = false
        scene.add(gltf.scene)
    })   

    // let floor1Group 
    gltfLoader.load('./model/floor1.glb', (gltf)=>{
        floor1Group = gltf.scene
        console.log('floor1Group',floor1Group)
        gltf.scene.traverse( function ( child ) {
            if ( child.isMesh ) { 
              child.material.emissiveIntensity = 5;                     
            }
            if(child.name == '静止工人001'){
              console.log('已找到曲线运动对象')
              wanderAnimation(child,curve1) 

            }
        } );
        floor1Group.visible = false
        scene.add(floor1Group)
    })   

    // let wallGroup
    gltfLoader.load("./model/wall.glb", (gltf) => {
      wallGroup = gltf.scene;
      wallGroup.visible =false
      scene.add(gltf.scene);
    });

    // let fighterGroup
    gltfLoader.load("./model/Fighter.glb", (gltf) => {
      fighterGroup = gltf.scene;
      console.log('fighterGroup',fighterGroup)
      // fighterGroup.visible =false
      fighterGroup.position.set(3, 42, 68);
      fighterGroup.traverse((child) => {
        if (child.isMesh) {
          child.material.emissiveIntensity = 15;
          child.position2 = child.position.clone();
        }
      });
      scene.add(gltf.scene);
      // 飞机点击事件监听
      customClickEvent(fighterGroup)

    });

    function showFloor1() {
      floor1Group.visible = true;
    }
    function hideFloor1() {
      floor1Group.visible = false;
    }
    function showFloor2() {
      floor2Group.visible = true;
      // fighterGroup.visible = true;
      floor2Tags.forEach((tag) => {
        tag.visible = true;
      });
    }
    function hideFloor2() {
      floor2Group.visible = false;
      // fighterGroup.visible = false;
      floor2Tags.forEach((tag) => {
        tag.visible = false;
      });
    }
    function hideWall() {
      wallGroup.visible = false;
    }
    function showWall() {
      wallGroup.visible = true;
    }

    function initEvent() {
      eventHub.on("showFloor1", () => {
        showFloor1();
        hideWall();
        hideFloor2();
      });
      eventHub.on("showFloor2", () => {
        showFloor2();
        hideWall();
        hideFloor1();
      });
      eventHub.on("showWall", () => {
        showWall();
        hideFloor1();
        hideFloor2();
      });
      eventHub.on("showAll", () => {
        showFloor1();
        showFloor2();
        showWall();
        gsap.to(wallGroup.position, {
          y: 200,
          duration: 1,
        });
        gsap.to(floor2Group.position, {
          y: 50,
          duration: 1,
          delay: 1,
        });
      });
      eventHub.on("hideAll", () => {
        console.log("hideall");
        // this.hideWall();
        gsap.to(wallGroup.position, {
          y: 0,
          duration: 1,
          delay: 1,
          onComplete: () => {
            hideFloor1();
            hideFloor2();
          },
        });
        gsap.to(floor2Group.position, {
          y: 0,
          duration: 1,
        });
      });

      //飞机爆炸和恢复特效
      eventHub.on("flatFighter", explode);
      eventHub.on("recoverFighter", recover);
      //漫游
      eventHub.on("wander", () => {
        wanderAnimation(camera,curve2)
      });

    }
    initEvent()
}

//CSS3D标签
function createTag(object3d) {
    // 创建各个区域的元素
    const element = document.createElement("div");
    element.className = "elementTag";
    element.innerHTML = `
      <div class="elementContent">
        <h3>${object3d.name}</h3>
        <p>温度：26℃</p>
        <p>湿度：50%</p>
      </div>
    `;

    const objectCSS3D = new CSS3DObject(element);
    objectCSS3D.position.copy(object3d.position);
    objectCSS3D.scale.set(0.2, 0.2, 0.2);
    // scene.add(objectCSS3D)
    return objectCSS3D;
 }
//点击监听
 function customClickEvent(object){
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  window.addEventListener("click", (event) => {
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
    //通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(mouse, camera);
    //进行检测
    const intersects = raycaster.intersectObject(object);
    if (intersects.length > 0) {
      //   真正触发精灵的点击事件
      console.log("点击了战斗机");
      if (object.visible) {
        floor2Group.visible = false;
        floor2Tags.forEach((tag) => {
          tag.visible = false;
        });
      } else {
        floor2Group.visible = true;
        floor2Tags.forEach((tag) => {
          tag.visible = true;
        });
      }
    }
  });
 }
//爆炸特效
function explode(){
      // 将飞机展成立方体
      // 获取立方体点的位置->设置展开方式
      const positions = [];
      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          positions.push(new THREE.Vector3(i * 2 - 2, j * 2 - 2, 0));
        }
      }
      let n = 0;
      fighterGroup.traverse((child) => {
        if (child.isMesh) {
          positions[n].multiplyScalar(10);
          gsap.to(child.position, {
            x: "+=" + positions[n].x,
            y: "+=" + positions[n].y,
            z: "+=" + positions[n].z,
            duration: 1,
          });
          n++;
        }
      });
      // console.log(positions);

}
//爆炸特效->恢复
function recover(){
  fighterGroup.traverse((child) => {
    if (child.isMesh) {
      gsap.to(child.position, {
        x: child.position2.x,
        y: child.position2.y,
        z: child.position2.z,
        duration: 1,
      });
    }
  });
}

//轨迹曲线
function curveLine(){
    // 在曲线里，getPoints获取51个点
    const points = curve.getPoints(500);
    // console.log(points);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    // Create the final object to add to the scene
    const curveObject = new THREE.Line(geometry, material);
    curveObject.visible = false
    scene.add(curveObject);
}
// curveLine()
//曲线运动
function wanderAnimation(object,curve) {
  gsap.to(object, {
    curveProgress: 0.999,
    duration: 10,
    repeat: -1,
    onUpdate: () => {
      const point = curve.getPoint(object.curveProgress);
      object.position.set(point.x, point.y, point.z);
      if (object.curveProgress + 0.001 < 1) {
        const point = curve.getPoint(object.curveProgress + 0.001);
        object.lookAt(point);
      }
    },
  });
}



     

