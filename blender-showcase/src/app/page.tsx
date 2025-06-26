"use client";
import Item from "./item";
import ModelScene from "./modelScene";
import { Canvas } from "@react-three/fiber";

export default function Home() {
    return (
        <div className="fullscreen">
            <div className="grid h-screen grid-cols-2">
                <div className="flex items-center justify-center bg-black">
                    <h1 className="m-auto flex aspect-square items-center rounded-2xl p-10 text-4xl text-white shadow-2xl shadow-white">
                        Hi, I&apos;m Way.<br></br>I also do 3D modeling.
                    </h1>
                </div>
                <div className="h-screen bg-black">
                    <Canvas className="h-full w-full">
                        <ModelScene></ModelScene>
                    </Canvas>
                </div>
            </div>
            <div className="mr-10 ml-10 grid h-fit grid-cols-3 gap-y-10 bg-white pt-10 pb-10">
                <Item
                    title="Teapots"
                    images={[
                        "/images/anime_teapot.png",
                        "/images/teapot002.png",
                        "/images/teapot003.png",
                    ]}
                    description="A teapot and cup set created in Blender, rendered with Cycles. A bit of shader practice too."
                ></Item>
                <Item
                    title="Low Poly Foxes"
                    images={[
                        "/images/mid_poly.png",
                        "/images/final_fox2.png",
                        "/images/derp.png",
                    ]}
                    description="Low poly foxes. Some silliness."
                    square={true}
                ></Item>
                <Item
                    title="Isometric Bedroom"
                    images={["/images/isometric_room.png"]}
                    description="My first Blender project. A simple isometric bedroom scene to learn the fundamentals of 3D modeling."
                    square={true}
                ></Item>
                <Item
                    title="Posterity"
                    images={[
                        "/images/posterity1.png",
                        "/images/posterity2.png",
                    ]}
                    description="A weapon from Destiny 2. Modeled from reference images. Proportions are slightly off, but the resemblance is there."
                ></Item>
                <Item
                    title="Plain Katanas"
                    images={[
                        "/images/noTex_katana1.png",
                        "/images/noTex_katana3.png",
                        "/images/noTex_katana2.png",
                    ]}
                    description="Katana mounted on wall. No textures, just a simple model. Rendered in different grayscales for some reason..."
                ></Item>
            </div>
        </div>
    );
}
