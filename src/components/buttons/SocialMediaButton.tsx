interface SocialMediaButtonProps {
    style: string;
    icon: string;
    onClick: () => void;
}

const SocialMediaButton = (props: SocialMediaButtonProps) => {
    return (
        <button onClick={props.onClick} className={`border border-2 border-red-600 rounded-full ${props.style}`}>
            <img src={props.icon} alt="Icon" className="p-2 h-8" />
        </button>
    );
}

export default SocialMediaButton;
