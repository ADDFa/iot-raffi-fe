namespace Partials {
    interface SidebarLink extends React.HTMLAttributes<HTMLAnchorElement> {
        children?: React.ReactNode
        to: string
        iconName: string
    }
}
