import IconButton from './buttons/IconButton';
import ic_shipment from "../assets/images/ic_shipping.svg";
import ic_location from "../assets/images/ic_location.svg";
import ic_help from "../assets/images/ic_help.svg";
import ic_track_order from "../assets/images/ic_track_order.svg";
import ic_wishlist from "../assets/images/ic_wishlist.svg";
import SocialMediaButton from './buttons/SocialMediaButton';
import ic_instagram from "../assets/images/ic_instagram.svg";
import ic_twitter from "../assets/images/ic_twitter.svg";
import ic_facebook from "../assets/images/ic_facebook.svg";
import { handleClick } from "./Header";
import { useLocale } from '../App';
import { useTranslation } from 'react-i18next'

const TopHeader = () => {
    const [locale, setLocale] = useLocale();

    const handleLocaleChange = (newLocale: string) => {
        setLocale(newLocale);
    };

    const { t } = useTranslation();

    return (
        <div className='bg-gray-200'>
            <div className="flex justify-between items-left mx-16 py-2">
                <div className="flex items-center space-x-4">
                    <img src={ic_shipment} className="object-contain h-6" alt="Shipment logo" />
                    <p>{t("free_express_shipping")}</p>
                </div>

                <div className="flex items-center">
                    <button className='mr-4' onClick={() => handleLocaleChange('en')}>EN</button>
                    <button className='mr-16' onClick={() => handleLocaleChange('hu')}>HU</button>
                    <IconButton style="float-right mr-4" buttonText={t("our_stores")} icon={ic_location} onClick={() => handleClick("/page404")} />
                    <IconButton style="float-right mr-4" buttonText={t("track_your_order")} icon={ic_track_order} onClick={() => handleClick("/page404")} />
                    <IconButton style="float-right mr-4 text-green-600" buttonText={t("help")} icon={ic_help} onClick={() => handleClick("/page404")} />
                    <IconButton style="float-right mr-16" buttonText={t("wishlist")} icon={ic_wishlist} onClick={() => handleClick("/page404")} />
                    <div>
                        <SocialMediaButton style="float-right" icon={ic_instagram} onClick={() => console.log('Instagram clicked')} />
                        <SocialMediaButton style="float-right" icon={ic_twitter} onClick={() => console.log('Twitter clicked')} />
                        <SocialMediaButton style="float-right" icon={ic_facebook} onClick={() => console.log('Facebook clicked')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
