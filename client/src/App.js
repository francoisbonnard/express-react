import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import "./App.css";
// import { OrbitControls } from "@react-three/drei";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Model() {
  const gltf = useGLTF("/Heart.gltf");
  return <primitive object={gltf.scene} />;
}

export default function Home() {
  return (
    <div>
      <Suspense>
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <Model />
        </Canvas>
      </Suspense>
    </div>
  );
}
