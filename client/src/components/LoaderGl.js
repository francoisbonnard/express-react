import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import HeartGl from "./HeartGl";
import Model from "./Soccer";

function LoaderGl() {
    return (
        <Canvas>
            <ambientLight />
            <OrbitControls/>
            <Suspense fallback={null}>
                <Model/>
                {/* <HeartGl/> */}
            </Suspense>
        </Canvas>
    )
}

export default LoaderGl