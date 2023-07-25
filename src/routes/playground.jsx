import React, { useRef, useState } from "react";
import NavBar from "../components/nav";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import "./playground.css";

export default function Playground() {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    return (
        <>
            <NavBar />
            <p style={{"text-align": "center", "margin-top": "20px"}}>Music I'm listening to</p>
            {/* <div id="canvas-container">
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
            </div> */}
            <iframe allow={"autoplay *; encrypted-media *; fullscreen *; clipboard-write"} frameborder={0} height={450} style={{"width": "100%", "max-width": "660px", "overflow": "hidden", "border-radius": "10px"}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/a-flower-bookmark-pt-2-ep/1288487936"></iframe>
        </>
    )
}