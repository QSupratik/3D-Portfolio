import { Canvas } from "@react-three/fiber";

function RotatingFigure(){
    return (
        <Canvas style={{width:"100%", height:"100%"}}>
            <mesh>
                <sphereGeometry args={[1,100,200]} position={[0,0,-5]}/>
                <meshStandardMaterial/>
            </mesh>
        </Canvas>
    )
}

export default RotatingFigure;