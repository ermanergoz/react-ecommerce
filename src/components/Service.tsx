interface ServiceProps {
    serviceText: string;
    serviceTitle: string;
    icon: string;
}

const Service = (props: ServiceProps) => {
    return (
        <div className="flex flex-row place-items-center py-2 lg:py-4">
            <img src={props.icon} alt="Icon" className="lg:h-10 h-8 pr-4" />
            <div className="flex-colummn">
                <p className={"font-bold text-sm lg:text-base"}>{props.serviceTitle}</p>
                <p className={"text-left text-xs lg:text-sm text-gray-500"}>{props.serviceText}</p>
            </div>
        </div>
    );
}

export default Service;
