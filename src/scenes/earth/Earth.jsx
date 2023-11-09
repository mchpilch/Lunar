import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = ({displacementScale}) => {
    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap, earthEmissiveMap] = useTexture([
        '/assets/earth_day.jpg',
        '/assets/earth_normal.jpg',
        '/assets/earth_specular.jpg',
        '/assets/earth_displacement.jpg',
        '/assets/earth_night.jpg',
    ]);

    const earthRef = useRef();
    useFrame(()=>{
         earthRef.current.rotation.y += 0.022;
    })

    return <mesh ref={earthRef} castShadow
    receiveShadow>
        <sphereGeometry args={[1,32,32]}></sphereGeometry> 
        <meshPhongMaterial 
        map={earthTexture} 
        normalMap={earthNormalMap} 
        shininess={2500}
        specularMap={earthSpecularMap}
        displacementMap={earthDisplacementMap}
        displacementScale={displacementScale}
        emissiveMap={earthEmissiveMap}
        emissiveIntensity={1.75} 
        emissive={0xffff00}
        // /* radius, X -axis, Y - axis *   color='blue'/
        /> 
    </mesh> 
} 

export default Earth;