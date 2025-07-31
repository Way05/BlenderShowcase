import { useState } from "react";
import Image from "next/image";

type SlideshowProps = {
    images: string[];
};

export default function Slideshow(props: SlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // const len = props.images.length;
    return (
        <div className="relative h-full w-full overflow-hidden bg-black">
            <div
                className="relative h-full w-full transition duration-100"
                style={{
                    transform: `translateY(-${currentIndex * 100}%)`,
                }}
            >
                {props.images.map((image, index) => {
                    if (image.endsWith(".png")) {
                        return (
                            <div key={index} className="relative h-full w-full">
                                <Image
                                    src={image}
                                    className="rounded-2xl object-cover"
                                    alt=""
                                    fill
                                />
                            </div>
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
                })}
            </div>
            <div className="absolute right-0 bottom-4 left-0 w-full">
                <div className="flex items-center justify-center gap-2">
                    {props.images.length > 1 &&
                        props.images.map((_, index) => (
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
