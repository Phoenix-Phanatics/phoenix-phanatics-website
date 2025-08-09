import headerImg from "../images/india.jpg"

export default function Header() {
    return (
        <div 
            className="bg-cover bg-center h-80 w-full flex flex-col justify-between col-span-2"
            style={{ backgroundImage: `url(${headerImg})` }}
        >
            <HeaderText>Team 11104</HeaderText>
            <hr className="border-4" />
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