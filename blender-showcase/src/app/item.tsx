"use client";

import Image from "next/image";
import { useState } from "react";
import ItemModal from "./itemModal";

type ItemProps = {
    title: string;
    images: string[];
    description: string;
};

export default function Item(props: ItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => {
                if (!isOpen) setIsOpen(true);
            }}
            className="bg-gray m-auto h-80 w-100 items-end rounded-2xl shadow-lg shadow-black transition hover:shadow-xl"
        >
            <div className="relative h-9/10">
                <Image
                    src={props.images[0]}
                    alt={props.title}
                    fill
                    objectFit="cover"
                    className="rounded-2xl"
                ></Image>
            </div>
            <p className="h-1/10 w-full rounded-2xl bg-white pl-1 text-xl">
                {props.title}
            </p>

            <ItemModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={props.title}
                images={props.images}
                description={props.description}
            ></ItemModal>
        </div>
    );
}
