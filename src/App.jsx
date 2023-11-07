import MainContainer from "./MainContainer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function App() {


  return (
    <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [3,3,3]}}>
      <OrbitControls />
      <MainContainer />
    </Canvas>
  )
}

export default App
