import sponsors from "../data/sponsors"

export default function Sponsors() {
    return (
        <div className="col-span-2 bg-secondary-bg p-6 rounded-3xl shadow shadow-main-shadow">
            <SponsorHeader>Sponsors</SponsorHeader>
            <hr className="my-2 text-white" />
            <div className="flex flex-row gap-4 items-center justify-evenly">
                {sponsors.map((sponsor, i) => 
                    <Sponsor key={i} name={sponsor.name} image={sponsor.image} />
                )}
            </div>
            <DeleteButton />
        </div>
    )
}

function SponsorHeader({ children }) {
    return (
        <h1 className="text-6xl text-main-purple text-center pb-2">{children}</h1>
    )
}

function Sponsor({ name, image }) {
    return (
        <div className="bg-main-bg rounded-3xl shadow shadow-main-shadow px-8 py-8 my-4 flex-col gap-4 items-center justify-center">
            <SponsorImage image={image} />
        </div>
    )
}

function SponsorName({ name }) {
    return (
        <p className="text-2xl text-main-blue text-center my-2">{name}</p>
    )
}

function SponsorImage({image}) {
    return (
        <div>
            <img src="../images/india.jpg" alt={image} className="w-32 h-32" />
        </div>
    )
}

function DeleteButton() {
    return (
        <div className="flex justify-self-end items-end justify-end mt-4">
            <a href="./style.css" download> 
                <button className="text-1xl text-center text-white cursor-pointer bg-main-bg p-3 rounded-2xl shadow shadow-main-shadow hover:bg-[#1a1a1a] active:bg-[#1f1f1f] transition duration-300 ease-in-out">Sponsorship Packet</button>
            </a>
        </div>
    )
}