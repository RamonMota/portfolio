import { ReactNode } from "react"

export const CardGrid = (props: {
    showContent?: boolean | false
    staertColor?: string | null
    children?: ReactNode
}) => {
    return (
        <div className="content-card-grid">
            {props.children}
        </div>
    )
}
