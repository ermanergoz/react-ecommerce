import ic_profile from "../../assets/images/ic_profile.svg";

interface SignInButtonProps {
    style?: string;
    buttonLabel: string;
    buttonText: string;
    onClick: () => void;
}

const SignInButton = (props: SignInButtonProps) => {
    return (
        <button onClick={props.onClick} className="flex flex-row">
            <img src={ic_profile} alt="Icon" className="h-12 px-1" />
            <div className="flex-colummn">
                <p className={`text-left text-sm text-gray-500 ${props.style}`}>{props.buttonLabel}</p>
                <p className={`font-bold ${props.style}`}>{props.buttonText}</p>
            </div>
        </button>
    );
}

export default SignInButton;
