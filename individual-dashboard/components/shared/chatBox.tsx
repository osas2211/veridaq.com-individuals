import { MessageCard, MessageLabel } from "./shared"

export default function ChatBox(){
    return (
        <div className="bg-[#CBC0CD] flex-grow h-full w-[50%] normal-border rounded-lg" style={{overflow: "scroll", overflowX: "hidden"}}>
            <div className="">
                <MessageLabel
                    imgSrc="/assets/images/user.png"
                    name="Tomiwa Philip"
                />
            </div>
            <div className="">
                <MessageCard
                    message="Hey, How are you?!"
                    timeStamp="2:10PM"
                    bgColor="#"
                />
            </div>
        </div>
    )
}