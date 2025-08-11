export default function Navbar() {
    return (
        <div className="bg-main-bg w-full z-10 fixed h-1/16 flex flex-row items-center justify-center gap-12">
            <Column name="Home" link="#home" />
            <Column name="About Us" link="#about" />
            <Column name="Sponsors" link="#sponsors" />
            <Column name="Events" link="#events" />
            <Column name="Socials" link="#socials" />
        </div>       
    )
}

function Column({ name, link }) {
    return (
        <a href={link}>
            <div className="hover:bg-[#18005e] p-3 rounded-2xl transition duration-250 ease-in-out">
                <p className="text-2xl text-main-purple text-center">{name}</p>
            </div>
        </a>
    )
}