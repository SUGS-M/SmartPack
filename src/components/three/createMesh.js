import scene from "./scene";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import createCity from "./mesh/city";

export default function createMesh(){
    createCity()
}

// export default function createMesh(){
//     const loader = new GLTFLoader()
//     const dracoLoader = new DRACOLoader()
//     dracoLoader.setDecoderPath('./draco')
//     loader.setDRACOLoader(dracoLoader)

//     loader.load('./model/company.glb', (gltf)=>{
//         scene.add(gltf.scene)
//     })  
// }
 



