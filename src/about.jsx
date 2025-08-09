export default function About() {
    return ( 
        <div>
            <AboutHeader>About Us</AboutHeader>
            <hr />
            <ul>
                <ListItem id={1}></ListItem>
                <ListItem id={2}></ListItem>
                <ListItem id={3}></ListItem>
            </ul>
        </div>
     );
}

function AboutHeader({ children }) {
    return (
        <h1>{children}</h1>
    )
}

function ListItem({ id, children }) {
    <li key={id}>{children}</li>
}