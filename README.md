# 智慧园区
this is a smartPack by Vite、Vue3、Three.js、JavaScript、CSS.       
as a Initial template for 3D programming.     
功能：数字大屏、CSS3D标签、射线拾取、场景切换、点击交互、展品爆炸特效与复原、曲线运动、场景漫游、分层展示、单层展示

## 构建

安装 [Node.js](https://nodejs.org/en/download/).

并运行以下指令:

``` bash
# 首次安装依赖
npm install

# 本地运行调试
npm run dev

# 打包构建
npm run build
```

> 兼容性注意：Vite 需要 Node.js 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。

## 目录说明

```bash
template
│  dist                                                     // 打包文件
│  index.html                                               // 入口页面
│  package.json                                             // 项目配置
│  README.md                                                // 说明文档
│  vite.config.js                                           // vite配置
│
├─public                                                    // 公共静态资源
│  │
│  ├─model                                                  //模型
│  │ 
│  ├─CSS                                                    //全局样式文件
│  │
│  ├─texture                                                //贴图
│  │
│  └─draco                                                  // 模型压缩库
│      │  draco_decoder.js
│      │  draco_decoder.wasm
│      │  draco_encoder.js
│      │  draco_wasm_wrapper.js
│      └─gltf
│          │   draco_decoder.js
│          │   draco_decoder.wasm
│          │   draco_encoder.js
│          │   draco_wasm_wrapper.js
└─src
    │  App.vue                                              // 根页面
    │  main.js                                              // 入口脚本
    ├─assets                                                // 项目内资源
    │      vue.svg
    ├─components                                            // 组件
          │ Scene.vue                                       // 三维场景组件
          | DigitalScreen                                   // 二维大屏组件
          └─utils                                           // 事件监听转发工具
                 eventHub.js                                      // 事件触发
          └─three                                           // 三维场景目录                   
              │  animate.js                                       // 动画相关
              │  axesHelper.js                                    // 辅助坐标轴相关
              │  camera.js                                        // 相机相关
              │  controls.js                                      // 控制器相关
              │  createMesh.js                                    // 场景相关
              │  init.js                                          // 自适应屏幕相关
              │  renderer.js                                      // 渲染相关
              │  scene.js                                         // 场景容器相关
              │  stats.js                                         // 帧率监听相关
              └─mesh                                              //场景最底层文件
                    | city.js                                           //场景功能相关    
```
demo：https://sugs-m.github.io/SmartPack.github.io/
