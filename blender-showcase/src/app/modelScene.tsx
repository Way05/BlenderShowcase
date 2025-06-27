import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import React, { useState } from "react";

export default function ModelScene() {
    const [hovered, setHover] = useState(false);
    const [rotAmt, setRotAmt] = useState(0.01);

    const obj = React.useRef<Mesh>(null);
    useFrame(({}) => {
        const currObj = obj.current;
        if (currObj) {
            if (hovered) setRotAmt(0.005);
            else setRotAmt(0.01);
            currObj.rotation.x += rotAmt;
            currObj.rotation.y += rotAmt;
        }

        if (hovered) document.body.style.cursor = "crosshair";
        else document.body.style.cursor = "default";
    });

    return (
        // <div className="h-full w-full">
        //     <Canvas>
        <mesh
            ref={obj}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
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
