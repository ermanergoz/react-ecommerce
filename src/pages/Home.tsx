import Carousel from "../components/Carousal";
import banner_1 from "../assets/images/banner_1.png";
import banner_2 from "../assets/images/banner_2.jpg";
import banner_3 from "../assets/images/banner_3.jpg";
import Services from "../components/Services";
import PopularDepartments from "../components/PopularDepartments";
import MostPopular from "../components/MostPopularProducts";
import WeeklySpecials from "../components/WeeklySpecials";
import Ads from "../components/Ads";

const Home = () => {
  let bannerImages = [
    { src: banner_1, alt: "Banner 1" },
    { src: banner_2, alt: "Banner 2" },
    { src: banner_3, alt: "Banner 3" },
  ];

  let banners = bannerImages.map((banner, index) => (
    <img
      key={index}
      src={banner.src}
      alt={banner.alt}
      className="h-[200px] lg:h-[480px] w-full"
    />
  ));

  return (
    <div className="bg-gray-200">
      <Carousel buttonMargin={44} children={banners} slidesToShow={1} />
      <div className="lg:mx-16 mx-2 mt-8 space-y-8 pb-64">
        <div className="flex justify-center">
          <Services />
        </div>
        <PopularDepartments />
        <MostPopular />
        <WeeklySpecials />
        <Ads />
      </div>
    </div>
  );
};

export default Home;
