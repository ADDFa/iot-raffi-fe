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

    const scrollToBottom = useCallback(() => {
        const chatContainer = chatContainerRef.current
        chatContainer?.scrollTo(0, chatContainer.scrollHeight)
    }, [])

    const getMessages = useCallback(async () => {
        const messages = await Api.handle("message")
        if (messages.status === 200) setMessages(messages.result)
    }, [])

    useEffect(() => {
        getMessages().then(() => {
            scrollToBottom()
        })

        const interval = setInterval(getMessages, 2000)
        return () => clearInterval(interval)
    }, [getMessages, scrollToBottom])

    const send = () => {
        const form = formBuilder(
            ["user_id", "message"],
            [auth.user.id, messageRef.current?.value]
        )
        create("message", form)
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
            <div
                className="chat-container custom-scroll mb-3"
                ref={chatContainerRef}
            >
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
