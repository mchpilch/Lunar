import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as  THREE from 'three';
import AnimatedStars from "./AnimatedStars";
import Earth from "./Earth";
import Moon from "./Moon";

const MainContainer = () => {
    const directionalLightRef = useRef();
    const directionalLightRefTwo = useRef();
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
    return (<>
        <color attach='background' args={['black']}></color>
        <AnimatedStars />
        <axesHelper args={[50]} />
        <directionalLight ref={directionalLightRef} position={[0, 0, 10]} castShadow={true} intensity={4}/>
        <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} castShadow={true} intensity={4}/>
        {/* <ambientLight intensity={4} /> */}
        <group>
            <Earth displacementScale={0.075} />
            <Moon />
        </group>
    </>);
}

export default MainContainer;