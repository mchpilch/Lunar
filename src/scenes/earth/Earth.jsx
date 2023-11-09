import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = ({displacementScale}) => {
    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] = useTexture([
        '/assets/earth_day.jpg',
        '/assets/earth_normal.jpg',
        '/assets/earth_specular.jpg',
        '/assets/earth_displacement.jpg',
    ]);

    const earthRef = useRef();
    useFrame(()=>{
         earthRef.current.rotation.y += 0.001;
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
        // /* radius, X -axis, Y - axis *   color='blue'/
        /> 
    </mesh> 
} 

export default Earth;