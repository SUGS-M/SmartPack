<template>
    <div class="scene" ref="sceneDiv"></div>
</template>

<script setup>
// 导入场景
import scene from "./three/scene";
// 导入相机
import camera from "./three/camera";
// 导入控制器
import controls from "./three/controls";
//导入stats帧率检测器
import stats from "./three/stats";
// 导入辅助坐标轴
import axesHelper from "./three/axesHelper";
// 导入渲染器
import rendererModule from "./three/renderer";
// 初始化调整屏幕
import "./three/init";
// 导入添加物体函数
import createMesh from "./three/createMesh";
//导入animate
import animate from "./three/animate";

import { onMounted, ref } from "vue";

// 场景元素div
let sceneDiv = ref(null);
// 添加相机
scene.add(camera);
// 添加辅助坐标轴
scene.add(axesHelper);
// 创建物体
createMesh();

onMounted(() => {
  sceneDiv.value.appendChild(rendererModule.renderer.domElement);
  animate();
});
</script>



<style scoped>

</style>
