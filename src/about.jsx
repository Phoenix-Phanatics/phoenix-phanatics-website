export default function About() {
    return ( 
        <div className="col-span-2 bg-secondary-bg p-6 rounded-3xl shadow shadow-main-shadow flex flex-col scroll-mt-28" id="about">
            <AboutHeader>About Us</AboutHeader>
            <hr className="my-2 text-white" />
            <List>
                <ListItem id={1}>We are a community team based out of the general Middlesex County Area.</ListItem>
                <ListItem id={2}>We are a First Robotics Competition (FRC) team who compete within the First Mid-Atlantic (FMA) district.</ListItem>
                <ListItem id={3}>Our team was founded between the 2025 and 2026 seasons.</ListItem>
                <ListItem id={4}>The goal of our team is to teach robotics to those who may have not been able to in their own schools. We hope to spread the love of robitcs and competition that FRC inspires.</ListItem>
            </List>
        </div>
     );
}

function AboutHeader({ children }) {
    return (
        <h1 className="text-6xl text-main-purple text-center">{children}</h1>
    )
}

function ListItem({ id, children }) {
    return (
        <li key={id} className="text-3xl text-main-blue leading-10">{children}</li>
    )
}

function List({ children }) {
    return (
        <div className="flex flex-col h-full justify-between self-center w-15/16">
            {children}
        </div>
    )
}