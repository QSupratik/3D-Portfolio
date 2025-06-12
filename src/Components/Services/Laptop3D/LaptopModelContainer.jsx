import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { LaptopModel } from "./LaptopModel";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";

function LaptopModelContainer() {
    return (
        <Canvas style={{ width: "100%", height: "100%"}} camera={{ position: [0, 0, 7], fov: 60 }}>

            <Suspense fallback="loading...">
                <Stage enviornment="city">
                    <LaptopModel></LaptopModel>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate></OrbitControls>
                {/* <ambientLight intensity={100}/> */}
            </Suspense>
        </Canvas>
    )
}

export default LaptopModelContainer;