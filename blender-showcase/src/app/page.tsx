import Item from "./item";

export default function Home() {
    return (
        <div className="fullscreen">
            <div className="grid h-screen w-screen grid-cols-2">
                <div className="flex items-center justify-center bg-black">
                    <h1 className="m-auto flex aspect-square items-center rounded-2xl p-10 text-4xl text-white shadow-2xl shadow-white">
                        Hi, I&apos;m Way.<br></br>I also do 3D modeling.
                    </h1>
                </div>
                <div className="bg-black"></div>
            </div>
            <div className="mr-10 ml-10 grid h-fit grid-cols-3 gap-y-10 bg-white pt-10 pb-10">
                <Item
                    title="test"
                    images={[
                        "/images/anime_teapot.png",
                        "/images/teapot002.png",
                        "/images/teapot003.png",
                    ]}
                    description="A teapot and cup set created in Blender, rendered with Cycles. A bit of shader practice too."
                ></Item>
            </div>
        </div>
    );
}
