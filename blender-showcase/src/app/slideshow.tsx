import Image from "next/image";
import { useState } from "react";

type SlideshowProps = {
    images: string[];
};

export default function Slideshow(props: SlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div
                className="flex h-full transition duration-100"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {props.images.map((image, index) => (
                    <img src={image} key={index} className="object-cover" />
                    // <div key={index} className="w- flex h-full">
                    /* <Image
                            src={image}
                            alt=""
                            fill
                            objectFit="cover"
                            className="rounded-2xl"
                        ></Image> */
                    // </div>
                ))}
            </div>

            <div className="absolute right-0 bottom-4 left-0">
                <div className="flex items-center justify-center gap-2">
                    {props.images.map((_, index) => (
                        <div
                            onClick={() => setCurrentIndex(index)}
                            key={index}
                            className={`h-3 w-5 bg-white transition ${currentIndex === index ? "opacity-100" : "opacity-50"}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
