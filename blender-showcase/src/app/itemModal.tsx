import Image from "next/image";

type ItemModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    description: string;
};

export default function ItemModal(props: ItemModalProps) {
    return (
        <div
            onClick={props.onClose}
            className={`fixed inset-0 z-10 m-auto flex items-center justify-center transition ${props.isOpen ? "visible bg-black/20" : "invisible"}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-opacity-75 grid h-2/3 w-2/3 grid-cols-5 rounded-2xl bg-black p-5 text-white shadow-lg transition ${props.isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <div>
                    <p className="pt-5 pb-5 text-2xl">{props.title}</p>
                    <p>{props.description}</p>
                </div>
                <div className="relative col-span-4 rounded-2xl bg-white">
                    <Image
                        src={props.image}
                        alt=""
                        fill
                        objectFit="cover"
                        className="rounded-2xl"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
