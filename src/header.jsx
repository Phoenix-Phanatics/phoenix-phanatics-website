export default function Header() {
    return (
        <div className="bg-cover bg-center bg-[url(../images/future.jpg)] h-[80dvh] w-full flex flex-col items-center justify-center gap-8 col-span-3 mask-b-from-80% bg-fixed" id="home">
            <div className="backdrop-brightness-50 flex flex-col items-center justify-center rounded-3xl">
                <HeaderText>Team 11104</HeaderText>
                <hr className="border-4 w-4/5 text-center text-white" />
                <HeaderText>Phoenix Phanatics</HeaderText>
            </div>
        </div>
    )
}

function HeaderText({ children }) {
    return (
        <>
            <h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-center m-8 text-white">{children}</h1>
        </>
    )
}