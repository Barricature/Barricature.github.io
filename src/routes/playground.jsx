import React, { useRef, useState } from "react";
import NavBar from "../components/nav";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

export default function Playground() {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    return (
        <>
            <NavBar />
            <div id="canvas-container">
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <mesh 
                        position={[0, 0, 0]}
                        ref={ref}
                        scale={clicked ? 1.5 : 1}
                        onClick={(event) => click(!clicked)}
                        onPointerOver={(e) => hover(true)}
                        onPointerOut={(e) => hover(false)}>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial color={hovered ? 'rgb(86, 183, 218)' : 'rgb(66, 163, 198)'}/>   
                    </mesh>
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}