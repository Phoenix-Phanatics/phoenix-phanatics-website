import sponsors from "../data/sponsors"

export default function Sponsors() {
    return (
        <div className="col-span-2">
            <SponsorHeader>Sponsors</SponsorHeader>
            <hr className="my-2" />
            <div className="flex flex-row gap-4 items-center justify-evenly">
                {sponsors.map((sponsor) => 
                    <Sponsor name={sponsor.name} image={sponsor.image} />
                )}
            </div>
            <DeleteButton />
        </div>
    )
}

function SponsorHeader({ children }) {
    return (
        <h1 className="text-6xl text-white text-center pb-2">{children}</h1>
    )
}

function Sponsor({ name, image }) {
    return (
        <div>
            <SponsorName name={name} />
            <SponsorImage image={image} />
        </div>
    )
}

function SponsorName({ name }) {
    return (
        <p className="text-2xl text-white text-center my-2">{name}</p>
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
        <div className="flex items-center justify-center mt-4">
            <a href="./style.css" download> 
                <button className="text-2xl text-center text-white">Sponsorship Packet</button>
            </a>
        </div>
    )
}