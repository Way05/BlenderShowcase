// "use client";
import CanvasWrapper from "./canvasWrapper";
import Item from "./item";

export default function Home() {
    return (
        <div className="fullscreen">
            <div className="grid h-screen grid-cols-2">
                <div className="flex items-center justify-center bg-black">
                    <div className="rounded-2xl bg-linear-to-br from-black via-blue-500 to-blue-200 p-0.5">
                        <h1 className="m-auto flex items-center rounded-2xl bg-black p-10 text-4xl text-white">
                            <span>
                                Hi, I&apos;m{" "}
                                <span className="bg-linear-to-r from-white to-blue-500 bg-clip-text text-transparent">
                                    Way
                                </span>
                                .<br></br>I also do 3D modeling.
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="h-screen bg-black">
                    <CanvasWrapper />
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
                        // "/videos/posterity.mp4",
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
                <Item
                    title="First Animation"
                    images={["/videos/selfProject.mp4"]}
                    description="bad"
                ></Item>
            </div>
            <footer className="text-center">
                - Thanks for visiting &lt;3 -
            </footer>
        </div>
    );
}
