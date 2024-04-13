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
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <Outlet />
    </>
  )
}

export default Header
