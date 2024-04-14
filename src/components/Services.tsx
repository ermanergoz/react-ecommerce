import Service from "./Service";
import ic_shipment from "../assets/images/ic_shipping.svg";
import ic_dollar from "../assets/images/ic_dollar.svg";
import ic_support from "../assets/images/ic_support.svg";
import ic_secure_payment from "../assets/images/ic_secure_payment.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-between bg-white w-full px-16 rounded-md">
            <Service serviceText={t("free_shipping_text")} serviceTitle={t("free_shipping_title")} icon={ic_shipment} />
            <Service serviceText={t("money_back_guarantee_text")} serviceTitle={t("money_back_guarantee_title")} icon={ic_dollar} />
            <Service serviceText="Lorem ipsum dolor sit amet" serviceTitle={t("online_support_title")} icon={ic_support} />
            <Service serviceText="Lorem ipsum dolor sit amet" serviceTitle={t("secure_payment")} icon={ic_secure_payment} />
        </div>
    )
}

export default Services
