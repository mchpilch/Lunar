import MainContainer from "./MainContainer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf, usePerf } from "r3f-perf";


function App() {


  return (
    <Canvas 
    camera={{fov: 75, near: 0.1, far: 10000, position: [16,16,16]}}
    shadows
    >
      {/* <Perf /> monitor */}
      <OrbitControls />
      <MainContainer />
    </Canvas>
  )
}

export default App
