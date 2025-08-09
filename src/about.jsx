export default function About() {
    return ( 
        <div className="col-span-2">
            <AboutHeader>About Us</AboutHeader>
            <hr className="my-2" />
            <List>
                <ListItem id={1}>We are a community team based out of the general Middlesex County Area.</ListItem>
                <ListItem id={2}>We are a First Robotics Team (FRC) team who compete within the First Mid-Atlantic (FMA) district.</ListItem>
                <ListItem id={3}>Our team was founded between the 2025 and 2026 season.</ListItem>
                <ListItem id={4}>The goal of our team is to teach robotics to those who may have not been able to in their home schools. We hope to spread the love of robitcs and competition that FRC inspires.</ListItem>
            </List>
        </div>
     );
}

function AboutHeader({ children }) {
    return (
        <h1 className="text-6xl text-white text-center">{children}</h1>
    )
}

function ListItem({ id, children }) {
    return (
        <li key={id} className="text-3xl text-white text-center">{children}</li>
    )
}

function List({ children }) {
    return (
        <ul>
            {children}
        </ul>
    )
}