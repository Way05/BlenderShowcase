import Slideshow from "./slideshow";

type ItemModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
    description: string;
    square?: boolean;
};

export default function ItemModal(props: ItemModalProps) {
    return (
        <div
            onClick={props.onClose}
            className={`fixed inset-0 z-10 m-auto flex items-center justify-center transition ${props.isOpen ? "visible bg-black/20" : "invisible"}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-opacity-75 grid h-2/3 ${props.square ? "w-fit grid-cols-3" : "w-2/3 grid-cols-5"} rounded-2xl bg-black p-5 text-white shadow-lg transition ${props.isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <div className="pr-5">
                    <p className="pt-5 text-2xl">{props.title}</p>
                    <hr className="mt-5 mb-5 w-10"></hr>
                    <p>{props.description}</p>
                </div>
                <div
                    className={`relative ${props.square ? "col-span-2 aspect-square" : "col-span-4"} overflow-hidden rounded-2xl bg-white`}
                >
                    <div className="h-full w-full">
                        <Slideshow images={props.images}></Slideshow>
                    </div>
                </div>
            </div>
        </div>
    );
}
