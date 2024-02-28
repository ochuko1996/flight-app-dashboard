import { FaHome } from "react-icons/fa";
import { LuPlane } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
'/emirate-removebg-preview.png'
'/luthaniasa-removebg-preview.png'
'/qatar-removebg-preview.png'
export const Links = [
    {
        id: 1,
        name: 'dashboard',
        link: '/',
        icon: FaHome
    },
    {
        id: 2,
        name: 'flights',
        link: '/flights',
        icon: LuPlane
    },
    {
        id: 3,
        name: 'wallet',
        link: '/wallet',
        icon: BiWallet
    },
    {
        id: 4,
        name: 'reports',
        link: '/reports',
        icon: RiProfileLine
    },
    {
        id: 5,
        name: 'statistics',
        link: '/statistics',
        icon: AiFillPieChart
    },
    {
        id: 6,
        name: 'settings',
        link: '/settings',
        icon: AiOutlineSetting
    },
]

export const travelOption = [
    {
        id: 1,
        name: 'one way'
    },
    {
        id: 2,
        name: 'round trip'
    },
    {
        id: 3,
        name: 'multi city'
    },
]
export const flightDetails = [
    {
        id: 1,
        from: 'jfk',
        to: 'bom',
        airline: 'emirates',
        duration: '1h 20m',
        option: 'one-stop',
        toTime: '13:20',
        fromTime: '14:20',
        price: '1,120',
        imgUrl: '/emirate-removebg-preview.png'
    },
    {
        id: 2,
        from: 'jfk',
        to: 'bom',
        airline: 'qatar',
        duration: '1h 20m',
        option: 'non-stop',
        toTime: '13:20',
        fromTime: '14:20',
        price: '2,420',
        imgUrl: '/qatar-removebg-preview.png'
    },
    {
        id: 3,
        from: 'jfk',
        to: 'bom',
        airline: 'luthiansa',
        duration: '1h 20m',
        option: 'more-stop',
        toTime: '14:20',
        fromTime: '14:20',
        price: '1,180',
        imgUrl: '/luthaniasa-removebg-preview.png'
    },
    {
        id: 4,
        from: 'jfk',
        to: 'bom',
        airline: 'emirates',
        duration: '1h 20m',
        option: 'one-stop',
        toTime: '13:20',
        fromTime: '14:20',
        price: '2,120',
        imgUrl: '/emirate-removebg-preview.png'
    },
]
export const flightsOptions = [
    {
        id: 1,
        option: 'non-stop'
    },
    {
        id: 2,
        option: 'one-stop'
    },
    {
        id: 3,
        option: 'more-stop'
    },
]