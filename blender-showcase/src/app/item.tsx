"use client";

import Image from "next/image";
import { useState } from "react";
import ItemModal from "./itemModal";

type ItemProps = {
    title: string;
    images: string[];
    description: string;
    square?: boolean;
};

export default function Item(props: ItemProps) {
    const [thumbnail, setThumbnail] = useState(props.images[0]);
    const [objectFit, setObjectFit] = useState("cover");
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => {
                if (!isOpen) setIsOpen(true);
            }}
            className="bg-gray m-auto h-80 w-100 items-end rounded-2xl"
        >
            <div className="relative h-9/10">
                <Image
                    src={thumbnail}
                    alt={props.title}
                    fill
                    objectFit={objectFit}
                    className="h-full cursor-pointer rounded-2xl bg-black shadow-md shadow-black transition hover:scale-105 hover:shadow-lg"
                    onError={() => {
                        setThumbnail("/file.svg");
                        setObjectFit("");
                    }}
                ></Image>
            </div>
            <p className="h-1/10 w-full cursor-pointer bg-white p-1 pt-3 text-xl transition hover:underline">
                {props.title}
            </p>

            <ItemModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={props.title}
                images={props.images}
                description={props.description}
                square={props.square}
            ></ItemModal>
        </div>
    );
}
