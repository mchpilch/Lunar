import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useCallback } from "react";
import * as THREE from 'three'

const Moon = (() => {
    {/*first is how fast second amplitude
    // time it takes for the Moon to rotate once on its axis is equal to 
    // the time it takes for the Moon to orbit once around Earth. 
    // This means that the same side of the Moon always faces our planet.
    */ }
    const [moonTexture] = useTexture([
        '/assets/moon.jpg'
    ]);

    const moonRef = useRef();
    const clockRef = useRef(new THREE.Clock())
    const Amp = 4;
    const Freq = 0.5;
    const updateMoonPosition = useCallback(() => {
        moonRef.current.position.x = Math.sin(clockRef.current.getElapsedTime() * Freq) * Amp; {/*first is how fast second amplitude*/ }
        moonRef.current.position.z = Math.cos(clockRef.current.getElapsedTime() * Freq) * Amp;
      }, [])
    useFrame(() => {
        updateMoonPosition()
        moonRef.current.rotation.y += 0.005;
    })
    {/* 60.3 */ }
    return <mesh ref={moonRef} position={[0, 0, Amp]} castShadow receiveShadow>
        <sphereGeometry args={[0.2725, 16, 16]}></sphereGeometry>  {/* 0.2725 */}
        <meshPhongMaterial
            map={moonTexture}
            emissiveMap={moonTexture}
            emissive={0xffffff}
            emissiveIntensity={0.05}
        />
    </mesh>
})

export default Moon;