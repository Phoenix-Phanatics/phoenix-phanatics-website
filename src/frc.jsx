export default function FRC() {
    return (
        <div className="row-span-2 bg-secondary-bg p-6 rounded-3xl shadow shadow-main-shadow flex flex-col">
            <FRCHeader>FRC</FRCHeader>
            <hr className="my-2 text-white" />
            <div className="flex h-full justify-self-end flex-col items-center justify-evenly">
                <FRCExplanation>FRC is an international robotics competition that facilitates both rivalry and community. Yearly, new competitions are created in order to challenge students in new and fun ways.</FRCExplanation>
                <div className="flex flex-col gap-2 items-center">
                    <FRCVideo video="https://www.youtube.com/embed/YWbxcjlY9JY?si=vTzglWL9lwyPXuJ4" />
                    <FRCExplanation>The above video depicts the competition in 2025: REEFSCAPE. Teams were tasked with creating robots that could score the most points according to the video showcase provided.</FRCExplanation>
                </div>
            </div>
        </div>
    )
}

function FRCHeader({ children }) {
    return (
        <h1 className="text-6xl text-main-purple text-center">{children}</h1>
    )
}

function FRCExplanation({ children }) {
    return (
        <div className="text-2xl text-main-blue text-center">{children}</div>
    )
}

function FRCVideo({ video }) {
    return (
        <iframe 
            src={video} 
            title="YouTube video player" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="my-4 w-15/16 aspect-video">
        </iframe>
    );
}