import ContactsList from "./ContactsList"
import { DotsHorizontalIcon, VideoCameraIcon, SearchIcon } from "@heroicons/react/solid"

const contacts = [
    {
        name: "Phunnu",
        src: "/phunnu.jpg",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/zvy",
    }
]

function Widgets() {
    return (
        <div className="mt-5 hidden lg:block">
            <div className="flex items-center space-x-3">
                <div>Contacts</div>
                <div className="flex items-center">
                    <div className="inputIcon">
                        <SearchIcon className="h-6 text-gray-500" />
                    </div>
                    <div className="inputIcon">
                        <VideoCameraIcon className="h-6 text-gray-500" />
                    </div>
                    <div className="inputIcon">
                        <DotsHorizontalIcon className="h-6 text-gray-500" />
                    </div>
                </div>
            </div>
            <div>
                {
                    contacts.map((contact) => (
                        <ContactsList key={contact.name} src={contact.src} name={contact.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Widgets
