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
            <div className="m-10 grid h-full grid-cols-3 bg-white">
                <Item title="test" image="/images/anime_teapot.png"></Item>
            </div>
        </div>
    );
}
