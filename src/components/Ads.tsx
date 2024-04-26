import img_ad_1 from "../assets/images/img_ad_1.png";
import img_ad_2 from "../assets/images/img_ad_2.png";

const Ads = () => {
    return (
        <div className="grid grid-rows-1 grid-flow-col gap-x-8">
            <img className="col-span-1 w-full h-56 rounded-md" src={img_ad_1} alt="Image" />
            <img className="row-span-1 w-full h-56 rounded-md" src={img_ad_2} alt="Image" />
        </div>
    )
}

export default Ads;
