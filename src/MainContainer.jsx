import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as  THREE from 'three';
import AnimatedStars from "./AnimatedStars";
import Earth from "./scenes/earth/Earth";
import Moon from "./scenes/earth/Moon";
import ISS from "./scenes/earth/ISS";
import Sun from "./scenes/sun/Sun";

const MainContainer = () => {
    const directionalLightRef = useRef();
    const directionalLightRefTwo = useRef();
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
    return (<>
        <color attach='background' args={['black']}></color>
        <AnimatedStars />
        <axesHelper args={[50]} />
        {/* <directionalLight ref={directionalLightRef} position={[0, 0, 10]} castShadow={true} intensity={4}/> */}
        {/* <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} castShadow={true} intensity={4}/> */}
        {/* <ambientLight intensity={4} /> */}
        <Sun />
        <group>
            <Earth displacementScale={0.075} />
            <ISS />
            <Moon />
        </group>
    </>);
}

export default MainContainer;