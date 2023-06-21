import { FC } from "react"

const Message: FC<Chatting.Message> = ({
    isUser,
    message = false,
    time,
    sender
}) => {
    return (
        <div className={`message ${isUser ? "user" : "bot"}-message`}>
            <span className="sender info">{sender}</span>
            <br />
            <span>
                {message}
                <br />
                <span className="info">{time}</span>
            </span>
        </div>
    )
}

export default Message
