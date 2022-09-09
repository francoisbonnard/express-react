import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei/core";
import HeartGl from "./HeartGl";
  
  export default function LoaderGl(props) {
    // console.log(props)
    return (
      <div>
        <Suspense>
          <Canvas>
            <OrbitControls />
            <HeartGl images={props.images}/>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
          </Canvas>
        </Suspense>
      </div>
    );
  }
  