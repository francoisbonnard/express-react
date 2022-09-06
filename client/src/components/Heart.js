import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Environment, OrbitControls } from "react";
// import { Environment, OrbitControls } from "@react-three/drei";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Model = () => {
  try {

    const gltf = useLoader(GLTFLoader, "/Heart.gltf");
  } catch (error) {
    console.log(error);
    console.log("gltf erreur");
  }
  return (
    <>
      {/* <primitive object={gltf.scene} scale={0.4} /> */}
    </>
  );
};

export default function heart() {
  return (
    <div>
      <h1>React Three Fiber</h1>
      <div style={{ width: "25vw", height: "25vh", backgroundColor: "blue" }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div>
      <div
        style={{ width: "25vw", height: "25vh", backgroundColor: "red" }}
      >
         <Canvas>
        
        <Suspense fallback={null}>
          {/* <Model /> */}
          {/* <OrbitControls /> */}
          {/* <Environment preset="sunset" background /> */}
        </Suspense>  
        
      </Canvas>
      </div>
    </div>
  );
}