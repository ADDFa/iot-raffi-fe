namespace Chatting {
    interface Message {
        isUser?: boolean
        message: string
        time: string
        sender: string
    }
}
