import { useState } from "react";

type SlideshowProps = {
    images: string[];
};

export default function Slideshow(props: SlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="relative h-full w-fit overflow-hidden bg-black">
            <div
                className="flex h-full transition duration-100"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {props.images.map((image, index) => {
                    if (image.endsWith(".png")) {
                        return (
                            <img
                                src={image}
                                key={index}
                                className="h-full rounded-2xl object-cover"
                            />
                        );
                    } else if (image.endsWith(".mp4")) {
                        return (
                            <video
                                key={index}
                                className="h-full rounded-2xl object-cover"
                                controls
                            >
                                <source src={image} type="video/mp4"></source>
                            </video>
                        );
                    }
                    // <div key={index} className="w- flex h-full">
                    /* <Image
                            src={image}
                            alt=""
                            fill
                            objectFit="cover"
                            className="rounded-2xl"
                        ></Image> */
                    // </div>
                })}
            </div>

            <div className="absolute right-0 bottom-4 left-0">
                <div className="flex items-center justify-center gap-2">
                    {props.images.map((_, index) => (
                        <div
                            onClick={() => setCurrentIndex(index)}
                            key={index}
                            className={`h-1 w-20 bg-white transition ${currentIndex === index ? "opacity-100" : "opacity-50"} cursor-pointer hover:scale-y-200`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
