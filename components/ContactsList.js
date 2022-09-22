import Image from "next/image";

function ContactsList({ src, name }) {
    return (
        <div className="flex items-center my-6 space-x-3">
            <div>
                <Image
                    className="rounded-full"
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                />
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ContactsList
