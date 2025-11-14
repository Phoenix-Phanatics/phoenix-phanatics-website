export function Subheader({ children, className }) {
    return (
        <h1 className={`sm:text-6xl text-5xl text-main-purple text-center ${className}`}>{children}</h1>
    )
}

export function Paragraph({ children }) {
    return (
        <div className="2xl:text-3xl lg:text-2xl sm:text-[1.25rem] text-[0.9rem] text-main-blue text-center">{children}</div>
    )
}

export function Item({ children, id }) {
    return (
        <li key={id} className="2xl:text-3xl lg:text-2xl sm:text-[1.25rem] text-[0.9rem] text-main-blue leading-10">{children}</li>
    )
}