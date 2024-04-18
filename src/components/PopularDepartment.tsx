export interface PopularDepartmentProps {
    title: string;
    productCountText: string;
    style?: string;
    image: string;
    onClick: () => void;
}

const PopularDepartment = (props: PopularDepartmentProps) => {
    return (
        <button className="grid grid-rows-1 grid-flow-col gap-x-16 bg-white pl-8 py-8 rounded-md" onClick={props.onClick}>
            <p className="col-span-1 text-xl font-bold mt-12">{props.title} <br></br> <span className="font-normal text-sm text-gray-500">{props.productCountText}</span></p>
            <img className="row-span-1 h-36" src={props.image} alt="Image" />
        </button>
    );
}

export default PopularDepartment;
