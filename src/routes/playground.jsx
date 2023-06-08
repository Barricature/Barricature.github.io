import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

export default function Playground() {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    return (
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
                    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>   
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    )
}