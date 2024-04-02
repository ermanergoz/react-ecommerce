import logo_porto from "../assets/images/logo_porto.png";
import SearchBar from './SearchBar';
import SignInButton from './buttons/SignInButton';
import ShoppingCartButton from './buttons/ShoppingCartButton';

const MiddleHeader = () => {
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div className="flex justify-between items-center space-x-32 mx-16 my-8">
            <img src={logo_porto} className="h-16" alt="Logo" />
            <div className="w-1/2">
                <SearchBar />
            </div>
            <div className="flex space-x-4 items-right">
                <SignInButton buttonLabel={"Welcome"} buttonText={"Sign / Register"} onClick={() => console.log('Sign in clicked')} />
                <ShoppingCartButton buttonLabel={"Welcome"} itemAmount={0} totalCost={0.00} onClick={() => console.log('Sign in clicked')} />
            </div>
        </div>
    )
}

export default MiddleHeader

{/*
        <div className="flex justify-between mx-16 my-8 bg-red">
            <img src={logo_porto} className="h-16 mr-32" alt="Logo" />
            <div className="mr-32 w-1/2">
                <SearchBar />
            </div>
            <div className="flex space-x-4 items-right">
                <SignInButton buttonLabel={"Welcome"} buttonText={"Sign / Register"} onClick={() => console.log('Sign in clicked')} />
                <ShoppingCartButton buttonLabel={"Welcome"} itemAmount={0} totalCost={0.00} onClick={() => console.log('Sign in clicked')} />
            </div>
        </div>
*/}