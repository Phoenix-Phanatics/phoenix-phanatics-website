import headerImg from "../images/india.jpg"

export default function Header() {
    return (
        <div className="bg-cover bg-center bg-[url(../images/india.jpg)] h-[80dvh] w-full flex flex-col items-center justify-center gap-8 col-span-3 mask-b-from-80%" id="home">
            <HeaderText>Team 11104</HeaderText>
            <hr className="border-4 w-full" />
            <HeaderText>Phoenix Phanatics</HeaderText>
        </div>
    )
}

function HeaderText({ children }) {
    return (
        <>
            <h1 className="text-7xl text-center m-8 bg-white">{children}</h1>
        </>
    )
}