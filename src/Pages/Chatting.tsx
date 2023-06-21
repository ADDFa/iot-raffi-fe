import {
    KeyboardEventHandler,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react"
import Auth from "../Functions/Auth"
import usePost from "../Hooks/usePost"
import useFormBuilder from "../Hooks/useFormBuilder"
import Message from "./Chatting/Message"
import Api from "../Functions/Api"

const Chatting = () => {
    const chatContainerRef = useRef<HTMLDivElement>(null)
    const messageRef = useRef<HTMLInputElement>(null)
    const formBuilder = useFormBuilder()
    const create = usePost()
    const auth = Auth.auth
    const [messages, setMessages] = useState<Record<string, any>[]>([])
    console.log(messages)

    const getMessages = useCallback(async () => {
        setMessages((await Api.handle("message")).result)
    }, [])

    useEffect(() => {
        const chatContainer = chatContainerRef.current
        chatContainer?.scrollTo(0, chatContainer.scrollHeight)
        getMessages()
    }, [getMessages])

    const send = () => {
        const form = formBuilder(
            ["user_id", "message"],
            [auth.user.id, messageRef.current?.value]
        )
        create("message", form, (res) => {
            if (res.status === 200) getMessages()
            console.log(res)
        })
    }

    const sendMessage: MouseEventHandler<HTMLButtonElement> = () => {
        send()
    }

    const handleEnter: KeyboardEventHandler<HTMLInputElement> = (evt) => {
        if (evt.key === "Enter") send()
    }

    const getTime = (created_at: string) => {
        const date = new Date(created_at)
        let hour: number | string = date.getHours()
        hour = hour < 10 ? `0${hour}` : hour
        let minute: number | string = date.getMinutes()
        minute = minute < 10 ? `0${minute}` : minute

        return `${hour}.${minute}`
    }

    return (
        <div className="container mt-5">
            <div className="chat-container mb-3" ref={chatContainerRef}>
                {messages.map(
                    (
                        {
                            user_id,
                            message: { message },
                            user: { name },
                            created_at
                        },
                        i
                    ) => (
                        <Message
                            time={getTime(created_at)}
                            sender={name}
                            key={i}
                            message={message}
                            isUser={user_id === auth.user.id}
                        />
                    )
                )}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    id="message"
                    ref={messageRef}
                    onKeyUp={handleEnter}
                />
                <button className="btn btn-primary" onClick={sendMessage}>
                    Kirim
                </button>
            </div>
        </div>
    )
}

export default Chatting
