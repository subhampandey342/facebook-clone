import Image from "next/image"
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, email, timestamp, image, postImage }) {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                    <img
                        className="rounded-full"
                        src={image}
                        width={40}
                        height={40}
                        alt=""
                    />
                    <div>
                        <p className="font-medium">{name}</p>

                        {timestamp ? (<p className="text-xs text-gray-400">
                            {
                                new Date(timestamp?.toDate()).toLocaleString()
                            }
                        </p>) : (
                            <p className="text-xs text-gray-400">Loading</p>
                        )}


                    </div>
                </div>
                <p className="pt-4">{message}</p>
            </div>
            {
                postImage && (
                    <div className="relative h-50 md:h-96 bg-white">
                        <Image src={postImage} bojectFit='cover' layout='fill' />
                    </div>
                )
            }
            {/* footer section */}
            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                <div className="inputIcon rounded-none">
                    <ThumbUpIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                <div className="inputIcon rounded-none">
                    <ChatAltIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                <div className="inputIcon rounded-none">
                    <ShareIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>
            </div>
        </div>
    )
}

export default Post
