import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from 'three';
import Moon from "./Moon";
import ISS from "./ISS";

const Earth = React.memo(({ displacementScale }) => {
    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap, earthEmissiveMap] = useTexture([
        '/assets/earth_day.jpg',
        '/assets/earth_normal.jpg',
        '/assets/earth_specular.jpg',
        '/assets/earth_displacement.jpg',
        '/assets/earth_night.jpg',
    ]);

    const {camera} = useThree();
    const clockRef = useRef(new THREE.Clock());
    const earthRef = useRef();

    const Amp = 8;
    const AngularSpeed = 0.1025;
    const updateEarthPosition = useCallback(() => {
        const x = Math.sin(clockRef.current.getElapsedTime() * AngularSpeed) * Amp;
        const z = Math.cos(clockRef.current.getElapsedTime() * AngularSpeed) * Amp;
        earthRef.current.position.set(x, 0, z);
    }, []);

    useFrame(() => {
        earthRef.current.rotation.y += 0.022;
        updateEarthPosition();
        const earthPositionRef = earthRef.current.position;
        const cameraTargetPosition = new THREE.Vector3(
            earthPositionRef.x + 5,
            earthPositionRef.y + 5,
            earthPositionRef.z + 5
        );

    
        if (followingEarth) {
            camera.lookAt(earthPositionRef);
            camera.position.copy(cameraTargetPosition);
        } else {
            const defaultCameraTarget = new THREE.Vector3(0,0,0);
            const defaultCameraPosition = new THREE.Vector3(16,16,16);
            camera.lookAt(defaultCameraTarget);
            camera.position.copy(defaultCameraPosition);
        }
    });

    const [hovered, hover] = useState(false);
    const [followingEarth, setFollowingEarth] = useState(false);

    const toggleFollowingEarth = () => {
        setFollowingEarth((prevFollowingEarth) => !prevFollowingEarth)
    }

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered])

    return (
        <group ref={earthRef}>
            <mesh
                ref={earthRef}
                castShadow
                receiveShadow
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}
                onClick={toggleFollowingEarth}
            >
                <sphereGeometry args={[1, 32, 32]}></sphereGeometry>
                <meshPhongMaterial
                    map={earthTexture}
                    normalMap={earthNormalMap}
                    shininess={2500}
                    specularMap={earthSpecularMap}
                    displacementMap={earthDisplacementMap}
                    displacementScale={displacementScale}
                    emissiveMap={earthEmissiveMap}
                    emissiveIntensity={hovered ? 9 : 4}
                    emissive={0xffff00}
                // /* radius, X -axis, Y - axis *   color='blue'/
                />
                <ISS />
                <Moon />
            </mesh>
        </group>
    )
})

export default Earth;
