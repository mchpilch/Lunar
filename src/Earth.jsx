import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = () => {
    const [earthTexture] = useTexture(['/assets/earth_day.jpg']);

    const earthRef = useRef();
    useFrame(()=>{
        // earthRef.current.rotation.x += 0.0002;
        // earthRef.current.rotation.y += 0.0002;
        earthRef.current.rotation.y += 0.01;
    })

    return <mesh ref={earthRef}>
        <sphereGeometry args={[1,32,32]}></sphereGeometry> 
        <meshStandardMaterial map={earthTexture}/> /* radius, X -axis, Y - axis *   color='blue'/
    </mesh> 
} 

export default Earth;