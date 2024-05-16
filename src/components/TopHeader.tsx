import ic_shipment from "../assets/images/ic_shipping.svg";
import ic_location from "../assets/images/ic_location.svg";
import ic_help from "../assets/images/ic_help.svg";
import ic_track_order from "../assets/images/ic_track_order.svg";
import ic_wishlist from "../assets/images/ic_wishlist.svg";
import ic_instagram from "../assets/images/ic_instagram.svg";
import ic_twitter from "../assets/images/ic_twitter.svg";
import ic_facebook from "../assets/images/ic_facebook.svg";
import { handleClick } from "./Header";
import { useLocale } from '../App';
import { useTranslation } from 'react-i18next';
import Button from "./Button";

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
                    <Button style='mr-4' children={<p>EN</p>} onClick={() => handleLocaleChange('en')} />
                    <Button style='mr-4' children={<p>HU</p>} onClick={() => handleLocaleChange('hu')} />
                    <Button variant="inline" style="float-right mr-4"
                        children={<>
                            <img src={ic_location} alt="Icon" className="object-contain h-6 px-1" />
                            <p>{t("our_stores")}</p>
                        </>}
                        onClick={() => handleClick("/page404")} />
                    <Button
                        variant="inline"
                        style="float-right mr-4"
                        children={
                            <>
                                <img src={ic_location} alt="Icon" className="object-contain h-6 px-1" />
                                <p>{t("our_stores")}</p>
                            </>
                        }
                        onClick={() => handleClick("/page404")}
                    />

                    <Button
                        variant="inline"
                        style="float-right mr-4"
                        children={
                            <>
                                <img src={ic_track_order} alt="Icon" className="object-contain h-6 px-1" />
                                <p>{t("track_your_order")}</p>
                            </>
                        }
                        onClick={() => handleClick("/page404")}
                    />

                    <Button
                        variant="inline"
                        style="float-right mr-4 text-green-600"
                        children={
                            <>
                                <img src={ic_help} alt="Icon" className="object-contain h-6 px-1" />
                                <p>{t("help")}</p>
                            </>
                        }
                        onClick={() => handleClick("/page404")}
                    />

                    <Button
                        variant="inline"
                        style="float-right mr-16"
                        children={
                            <>
                                <img src={ic_wishlist} alt="Icon" className="object-contain h-6 px-1" />
                                <p>{t("wishlist")}</p>
                            </>
                        }
                        onClick={() => handleClick("/page404")}
                    />

                    <div>
                        <Button
                            variant="rounded"
                            children={<img src={ic_instagram} alt="instagram" />}
                            onClick={() => console.log('Instagram clicked')}
                        />
                        <Button
                            variant="rounded"
                            children={<img src={ic_twitter} alt="twitter" />}
                            onClick={() => console.log('Twitter clicked')}
                        />
                        <Button
                            variant="rounded"
                            children={<img src={ic_facebook} alt="facebook" />}
                            onClick={() => console.log('Facebook clicked')}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TopHeader;
