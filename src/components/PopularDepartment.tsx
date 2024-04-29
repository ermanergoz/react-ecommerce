export interface PopularDepartmentProps {
    title: string;
    productCountText: string;
    image: string;
    onClick: () => void;
}

const PopularDepartment = (props: PopularDepartmentProps) => {
    return (
        <button className="grid grid-rows-1 grid-flow-col gap-x-2 lg:gap-x-16 bg-white pl-4 lg:pl-8 py-4 lg:py-8 rounded-md items-center" onClick={props.onClick}>
            <p className="col-span-1 lg:text-xl font-bold text-center">{props.title} <br></br> <span className="font-normal text-sm text-gray-500">{props.productCountText}</span></p>
            <img className="row-span-1 max-h-36" src={props.image} alt="Image" />
        </button>
    );
}

export default PopularDepartment;
