import { Metadata } from "next";
import Main from "../components/Organisms/Main";
import SideBar from "../components/Organisms/SideBar";
import MainTemplates from "../components/Template/MainTemplates";

export const metadata: Metadata = {
  title: "Flight ",
  description: "flight page",
};
export default function Flights() {
  return (
    <MainTemplates>
      <SideBar/>
      <Main/>
    </MainTemplates>
  )
}
