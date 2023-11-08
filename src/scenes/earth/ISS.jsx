import { useGLTF } from "@react-three/drei";
import { useMemo } from 'react';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ISS = () => {
    const memorizedISS = useMemo(() => {
        return useGLTF('assets/ISS/ISS_stationary.gltf');
    })

    const issRef = useRef();
    const Amp = 2;
    const Freq = 2;

    useFrame(({ clock }) => {
        issRef.current.position.x = Math.sin(clock.getElapsedTime() * Freq) * Amp; {/*first is how fast second amplitude*/ }
        issRef.current.position.z = Math.cos(clock.getElapsedTime() * Freq) * Amp;

        issRef.current.rotation.y += 0.001;
    })
    return (
        <mesh ref={issRef} castShadow>
            <primitive object={memorizedISS.scene} position={[0, 0, 0]} scale={0.005} />
        </mesh>
    )
}

export default ISS;
