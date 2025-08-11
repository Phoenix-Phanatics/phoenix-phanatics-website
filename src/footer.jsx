import columns from "../data/columns";

export default function Footer() {
    return (
        <div className="w-dvw flex items-end justify-evenly py-8 bg-secondary-bg p-4 border-t-2 border-white" id="socials">
            {columns.map((column, i) => (
                <Column column={column.links} key={i}>{column.header}</Column>
            ))}
        </div>
    )
}

function Column({ column, children }) {
    return (
        <div className="flex flex-col items-center justify-between gap-2">
            <ColumnHeader>{children}</ColumnHeader>
            {column.map((link, i) => (
                <ColumnLink key={i} name={link.name} link={link.link} />
            ))}
        </div>
    )
}

function ColumnHeader({ children }) {
 return (
    <h1 className="text-2xl text-main-blue text-center underline">{children}</h1>
 )
}

function ColumnLink({ name, link }) {
    return (
        <a href={link}>
            <p className="text-center text-white">{name}</p>
        </a>
    )
}