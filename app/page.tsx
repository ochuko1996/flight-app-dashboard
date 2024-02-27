import Image from  'next/image'
import { Links, travelOption } from './constants';
import { FaChevronDown } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdOutlineLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { CgProfile } from 'react-icons/cg';
import TravelOption from './components/Molecules/TravelOption';
import TravelDetails from './components/Organisms/TravelDetails';
import Map from './components/Molecules/Map';
import NavBar from './components/Molecules/NavBar';
import Profile from './components/Molecules/Profile';
import ActiveUser from './components/Molecules/ActiveUser';
import SideBar from './components/Organisms/SideBar';
import Main from './components/Organisms/Main';
import MainTemplates from './components/Template/MainTemplates';
export default function Home() {
  
  
  return (
      // <div className="flex min-h-dvh justify-between bg-[rgb(225,236,235)]">
      //   <SideBar/>
      //   <Main/>
      // </div>
      <MainTemplates>
        <SideBar/>
        <Main/>
      </MainTemplates>
  );
}
