import { useHelper } from "@react-three/drei";
import React from "react";
import AnimatedStars from "./AnimatedStars";
import Earth from "./scenes/earth/Earth";
import Sun from "./scenes/sun/Sun";


const MainContainer = () => {
    // const directionalLightRef = useRef();
    // const directionalLightRefTwo = useRef();
    //useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
    //useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
    return (<>
        <AnimatedStars />
        <axesHelper args={[50]} />
        {/* <directionalLight ref={directionalLightRef} position={[0, 0, 10]} castShadow={true} intensity={4}/> */}
        {/* <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} castShadow={true} intensity={4}/> */}
        {/* <ambientLight intensity={4} /> */}
        <Sun />
        <Earth displacementScale={0.075} />
    </>);
}

export default MainContainer;
