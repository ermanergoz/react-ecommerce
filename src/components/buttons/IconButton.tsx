interface IconButtonProps {
    buttonText: string;
    style?: string;
    icon: string;
    onClick: () => void;
}

const IconButton = (props: IconButtonProps) => {
    return (
        <button onClick={props.onClick} className="flex flex-row">
            <img src={props.icon} alt="Icon" className="object-contain h-6 px-1" />
            <p className={`${props.style}`}>{props.buttonText}</p>
        </button>
    );
}

export default IconButton;
