import { useHelper } from "@react-three/drei";
import React, { useRef, useMemo, useCallback } from "react";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import AnimatedStars from "./AnimatedStars";
import Earth from "./scenes/earth/Earth";
import Moon from "./scenes/earth/Moon";
import ISS from "./scenes/earth/ISS";
import Sun from "./scenes/sun/Sun";

const MainContainer = () => {
    // const directionalLightRef = useRef();
    // const directionalLightRefTwo = useRef();
    //useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
    //useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
    const clockRef = useRef(new THREE.Clock())
    const groupRef = useRef();

    const Amp = 8;
    const AngularSpeed = 0.0025;
    const updateGroupPosition = useCallback(()=>{
        const x = groupRef.current.position.x = Math.sin(clockRef.current.getElapsedTime() * AngularSpeed) * Amp; 
        const z = groupRef.current.position.z = Math.cos(clockRef.current.getElapsedTime() * AngularSpeed) * Amp;
        groupRef.current.position.set(x,0,z);
    }, [])
    useFrame(() => {
        updateGroupPosition();
    })

    return (<>
        <AnimatedStars />
        <axesHelper args={[50]} />
        {/* <directionalLight ref={directionalLightRef} position={[0, 0, 10]} castShadow={true} intensity={4}/> */}
        {/* <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} castShadow={true} intensity={4}/> */}
        {/* <ambientLight intensity={4} /> */}
        <Sun />
        <group ref={groupRef}>
            <Earth displacementScale={0.075} />
            <ISS />
            <Moon />
        </group>
    </>);
}

export default MainContainer;