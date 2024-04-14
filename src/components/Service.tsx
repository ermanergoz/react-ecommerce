interface ServiceProps {
    serviceText: string;
    serviceTitle: string;
    icon: string;
}

const Service = (props: ServiceProps) => {
    return (
        <div className="flex flex-row place-items-center py-4">
            <img src={props.icon} alt="Icon" className="h-10 pr-4" />
            <div className="flex-colummn">
                <p className={"text-md font-bold"}>{props.serviceTitle}</p>
                <p className={"text-left text-sm text-gray-500"}>{props.serviceText}</p>
            </div>
        </div>
    );
}

export default Service;
