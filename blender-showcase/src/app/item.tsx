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
                    src={props.images[0]}
                    alt={props.title}
                    fill
                    objectFit="cover"
                    className="cursor-pointer rounded-2xl shadow-md shadow-black transition hover:scale-105 hover:shadow-lg"
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
