import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";


const Sun = React.memo(() => {
    const [sunTexture] = useTexture([
        '/assets/sun.jpg'
    ]);

    const sunRef = useRef();
    const Amp = 4;
    const Freq = 2;
    useFrame(() => {
        sunRef.current.rotation.y -= 0.002;
    })

    return (
        <mesh ref={sunRef} position={[0, 0, 0]}>
            <sphereGeometry args={[2, 64, 64]}></sphereGeometry> {/* 110 */}
            <meshPhongMaterial
                map={sunTexture}
                emissiveMap={sunTexture}
                emissiveIntensity={0.7}
                emissive={0xffffff} />
            <pointLight intensity={250} castShadow />
        </mesh>
    )
})

export default Sun;