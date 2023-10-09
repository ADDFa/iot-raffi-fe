namespace Dashboard {
    interface Value extends React.HTMLAttributes<HTMLParagraphElement> {
        name: string
        value: string
        none?: boolean
    }
}
