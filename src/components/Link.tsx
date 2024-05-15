interface CustomLinkProps {
    destination?: string;
    variant?: "full" | "default";
    children: React.ReactNode; 
}

const Link = (props: CustomLinkProps) => {
    const className = props.variant === "full" ? "block w-full px-4 py-2 hover:bg-green-500" : "";
    const href = props.destination ? props.destination : "/page404";

    return (
        <a href={href} className={className}>
            {props.children}
        </a>
    );
}

export default Link;
