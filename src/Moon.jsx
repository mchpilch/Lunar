import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Moon = () => {
    const [moonTexture] = useTexture([
        '/assets/moon.jpg'
    ]);

    const moonRef = useRef();
    useFrame(({clock})=>{
        moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 4; {/*first is how fast second amplitude*/}
        moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.5) * 4;

        moonRef.current.rotation.y += 0.001;
    })

    return <mesh ref={moonRef} 
    position={[0,0,5]}
    castShadow
    > 
    {/* 60.3 */}
        <sphereGeometry args={[0.2725,16,16]}></sphereGeometry> 
        <meshPhongMaterial
        map={moonTexture} 
        // normalMap={earthNormalMap} 
        // shininess={2500}
        // specularMap={earthSpecularMap}
        // displacementMap={earthDisplacementMap}
        // displacementScale={displacementScale}
        />
    </mesh> 
} 

export default Moon;