import MainContainer from "./MainContainer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CameraPositionLogging from "./helpers/cameraPositionLogging";

function App() {


  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 10000, position: [16, 16, 16] }}
      shadows
    >
      <color attach='background' args={['black']}></color>
      <Perf />
      < CameraPositionLogging event={"mousedown"} />
      {/* <OrbitControls /> */}
      {/* todo: button to on off orbit controls */}
      <MainContainer />
    </Canvas>
  )
}

export default App
