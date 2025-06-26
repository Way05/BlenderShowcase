import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import React, { useState } from "react";

export default function ModelScene() {
    const [hovered, hover] = useState(false);
    const [rotAmt, setRotAmt] = useState(0.01);

    const obj = React.useRef<Mesh>(null);
    useFrame(({}) => {
        const currObj = obj.current;
        if (currObj) {
            hovered ? setRotAmt(0.005) : setRotAmt(0.01);
            currObj.rotation.x += rotAmt;
            currObj.rotation.y += rotAmt;
        }
    });
    return (
        // <div className="h-full w-full">
        //     <Canvas>
        <mesh
            ref={obj}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[2, 2, 2]}></boxGeometry>
            <meshStandardMaterial
                color={hovered ? "blue" : "white"}
            ></meshStandardMaterial>
            <ambientLight intensity={5}></ambientLight>
        </mesh>
        //     </Canvas>
        // </div>
    );
}
