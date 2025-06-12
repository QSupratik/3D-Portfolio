import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function RotatingFigure() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />

      <Sphere args={[1, 100, 200]} scale={4.6} position={[0, 0, -5]}>
        <MeshDistortMaterial color={"#DB8B9B"} distort={0.5} speed={2} attach={"material"} />
      </Sphere>
    </Canvas>
  );
}

export default RotatingFigure;