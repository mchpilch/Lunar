import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as  THREE from 'three';
import AnimatedStars from "./AnimatedStars";
import Earth from "./Earth";

const MainContainer = () => {
    const directionalLightRef = useRef();
    const directionalLightRefTwo = useRef();
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
    return (<>
        <color attach='background' args={['black']}></color>
        <AnimatedStars />
        {/* <axesHelper args={[50]}/> */}
        {/* <directionalLight ref={directionalLightRef} position={[0,0,10]} castShadow={false}/>
        <directionalLight ref={directionalLightRefTwo} position={[0,0,-10]}  castShadow={false}/> */}
        <ambientLight intensity={4} />
        <Earth displacementScale={0.125} />
    </>);
}

export default MainContainer;