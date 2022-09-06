import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import Model from "./components/Soccer";
import "./App.css";

function App() {
    return (
        <Canvas>
            <ambientLight />
            <OrbitControls/>
            {/* <Suspense fallback={null}> */}
            <Suspense>
                <Model/>
                {/* <HeartGl/> */}
            </Suspense>
        </Canvas>
    )
}

export default App;
