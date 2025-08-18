import sponsors from "../data/sponsors"

export default function Sponsors() {
    
    const sponsorList = sponsors.map((sponsor, i) => 
        <Sponsor key={i} name={sponsor.name} image={sponsor.image} />
    )

    return (
        <div className="2xl:col-span-2 2xl:row-span-1 2xl:row-start-2 2xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:col-start-3 row-start-3 flex flex-col h-full w-full bg-secondary-bg p-6 rounded-3xl shadow shadow-main-shadow overflow-y-auto" id="sponsors">
            <SponsorHeader>Sponsors</SponsorHeader>
            <hr className="my-2 text-white" />
            <div className="flex 2xl:flex-row xl:flex-col flex-row flex-wrap h-full gap-4 items-center justify-evenly">
                {(sponsorList.length > 0) ? sponsorList : <Sponsorless>We currently have no sponsors</Sponsorless>}
                {console.log(sponsorList)}
            </div>
            <DeleteButton />
        </div>
    )
}

function SponsorHeader({ children }) {
    return (
        <h1 className="sm:text-6xl text-5xl text-main-purple text-center pb-2">{children}</h1>
    )
}

function Sponsorless({ children }) {
    return (
        <h1 className="sm:text-4xl text-3xl text-main-blue text-center pb-2">{children}</h1>
    )
}

function Sponsor({ name, image }) {
    return (
        <div className="bg-main-bg aspect-square sm:my-6 max-w-60 2xl:w-1/4 sm:max-h-full max-h-40 rounded-3xl shadow shadow-main-shadow p-8 flex items-center justify-center">
            <SponsorImage name={name} image={image} />
        </div>
    )
}

function SponsorImage({name, image}) {
    return (
        <img src={image} alt={`${name} Image`} className="aspect-square w-full sm:text-4xl text-3xl text-main-purple text-center" />
    )
}

function DeleteButton() {
    return (
        <div className="flex justify-end items-end sm:mt-0 mt-2">
            <a href="./style.css" download> 
                <button className="text-1xl text-center text-white cursor-pointer bg-main-bg p-3 rounded-2xl shadow shadow-main-shadow hover:bg-[#1a1a1a] active:bg-[#1f1f1f] transition duration-300 ease-in-out">Sponsorship Packet</button>
            </a>
        </div>
    )
}