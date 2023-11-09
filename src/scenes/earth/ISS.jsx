import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, useCallback } from "react";
import * as THREE from 'three'

const ISS = React.memo(() => {
    const issRef = useRef()
    const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock
    const memoizedISS = useMemo(() => {
        return useGLTF('assets/ISS/ISS_stationary.gltf')
    })
    const Amp = 2;
    const Freq = 2;
    const updateISSPosition = useCallback(() => {
        // Orbit Rotation
        issRef.current.position.x = Math.sin(clockRef.current.getElapsedTime() * Freq) * Amp;
        issRef.current.position.z = Math.cos(clockRef.current.getElapsedTime() * Freq) * Amp;
    }, [])
    useFrame(() => {
        updateISSPosition()
    })

    return (
        <mesh>
            <primitive
                ref={issRef}
                object={memoizedISS.scene}
                position={[Amp, 0, 0]}
                scale={0.01}
            />
        </mesh>
    )
})

export default ISS;
