type ItemProps = {
    title: string;
    image: string;
};

export default function Item({ title, image }: ItemProps) {
    return (
        <div
            className="bg-gray m-auto flex h-8/10 w-8/10 items-end rounded-2xl"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "covers",
                backgroundPosition: "center",
            }}
        >
            <p className="w-full bg-white p-3 text-2xl opacity-50">{title}</p>
        </div>
    );
}
