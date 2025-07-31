"use client";
import { Canvas } from "@react-three/fiber";
import ModelScene from "./modelScene";

export default function CanvasWrapper() {
    return (
        <Canvas className="h-full w-full">
            <ModelScene></ModelScene>
        </Canvas>
    );
}
