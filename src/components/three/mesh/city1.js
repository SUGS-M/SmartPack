


import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'

import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";

import scene from "../scene";

export default function createCity() {
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('./draco/')
    loader.setDRACOLoader(dracoLoader)

    //外墙
    // const wallList = [0,1,2,3,4,5,6,7,8,9,10,11,12]
    // const  loadwall = (i) => {
    //     const url="./model/wall"+"/wall"+i+".gltf"
    //     const gltfloader = new GLTFLoader();
    //     gltfloader.load(url, function (gltf) {
    //         gltf.scene.position.set(0,100,0)
    //         gltf.scene.scale.set(15,15,15)
    //         scene.add(gltf.scene)
    //     });
    // }
    // wallList.map((d) => {
    //     console.log('外墙',d)
    //     loadwall(d);
    // })
    //办公室
    // const sourceList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182]
    // const  loadModel = (i) => {
    //     const url="./model"+"/conpany"+i+".gltf"
    //     const gltfloader = new GLTFLoader();
    //     gltfloader.load(url, function (gltf) {
    //         // gltf.scene.traverse( function ( child ) {
    //         //     if ( child.isMesh ) {
    //         //         // console.log(child)
    //         //         // 居中
    //         //         // child.geometry.center(); 
    //         //         //视锥体剔除，Three引擎默认不渲染视锥体外的Mesh,导致不显示 
    //         //         child.frustumCulled = false;
    //         //         //模型自发光
    //         //         child.material.emissive =  child.material.color;
    //         //         child.material.emissiveMap = child.material.map                             
    //         //     }
    //         // } );
    //         scene.add(gltf.scene)
    //     });
    // }
    // sourceList.map((d) => {
    //     console.log('办公室',d)
    //     loadModel(d);
    // })

    loader.load('./model/conpany.glb', (gltf)=>{
        console.log(gltf.scene)
        gltf.scene.traverse((child)=>{
            if(child.isObject3D){
                // console.log('child.name',child.name)
                if(child.name == '核心科技室'){
                    createTag(child);
                    console.log('css3D已执行')
                }
            }
        })
        // gltf.scene.position.set(0,30,0)
        scene.add(gltf.scene)
    })   
}


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
    scene.add(objectCSS3D)
    // return objectCSS3D;
 }


     


 import * as THREE from 'three'
 import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
 import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
 
 export default class City{
     constructor(scene){
         this.scene = scene;
         const loader = new GLTFLoader()
         const dracoLoader = new DRACOLoader()
         dracoLoader.setDecoderPath('./draco')
         loader.setDRACOLoader(dracoLoader)
 
         loader.load('./model/company.glb', (gltf)=>{
             scene.add(gltf.scene)
         })
 
 
     }
 }
