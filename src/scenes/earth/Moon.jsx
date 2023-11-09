import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Moon = () => {
    // time it takes for the Moon to rotate once on its axis is equal to 
    // the time it takes for the Moon to orbit once around Earth. 
    // This means that the same side of the Moon always faces our planet.
    const [moonTexture] = useTexture([
        '/assets/moon.jpg'
    ]);

    const moonRef = useRef();
    const Amp = 4;
    const Freq = 0.5;
    useFrame(({ clock }) => {
        moonRef.current.position.x = Math.sin(3 + clock.getElapsedTime() * Freq) * Amp; {/*first is how fast second amplitude*/ }
        moonRef.current.position.z = Math.cos(3 + clock.getElapsedTime() * Freq) * Amp;

        moonRef.current.rotation.y += 0.005;
    })
    {/* 60.3 */ }
    return <mesh ref={moonRef} position={[0, 0, Amp]}  castShadow receiveShadow>
       <sphereGeometry args={[0.2725, 16, 16]}></sphereGeometry>  {/* 0.2725 */}
        <meshPhongMaterial 
        map={moonTexture} 
        emissiveMap={moonTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05} 
        />
    </mesh>
}

export default Moon;