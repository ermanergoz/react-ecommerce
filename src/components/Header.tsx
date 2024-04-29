import BottomHeader from "./BottomHeader"
import MiddleHeader from "./MiddleHeader"
import TopHeader from "./TopHeader"
import { Outlet } from 'react-router-dom';

export const handleClick = (link: string) => {
  window.location.assign(link);
};

const Header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <TopHeader />
        <MiddleHeader />
      </div>
      <BottomHeader />
      <Outlet />
    </>
  )
}

export default Header
