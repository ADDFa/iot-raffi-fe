namespace LoginRegister {
    interface Form extends React.HTMLAttributes<HTMLFormElement> {
        children: React.ReactNode
    }

    interface LinkToggle {
        to?: string
        text: string
        children: React.ReactNode
    }
}
