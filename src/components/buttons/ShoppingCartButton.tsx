import ic_shopping_cart from "../../assets/images/ic_shopping_cart.svg"

interface ShoppingCartButtonProps {
    style?: string;
    buttonLabel: string;
    itemAmount: number;
    totalCost: number;
    onClick: () => void;
}

const ShoppingCartButton = (props: ShoppingCartButtonProps) => {
    return (
        <button onClick={props.onClick} className="flex flex-row">
            <div className="relative">
                <img src={ic_shopping_cart} alt="Icon" className="h-12 px-1" />
                <p className="absolute inset-y-0 right-1 text-sm rounded-full bg-red-600 text-white h-5 w-5">{props.itemAmount}</p>
            </div>
            <div className="flex-colummn">
                <p className={`text-left text-sm text-gray-500 ${props.style}`}>{props.buttonLabel}</p>
                <p className={`text-left text-red-600 ${props.style}`}>{`$ ${props.totalCost}`}</p>
            </div>
        </button>
    );
}

export default ShoppingCartButton;
