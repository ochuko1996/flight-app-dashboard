import { Metadata } from "next";
import Main from "../components/Organisms/Main";
import SideBar from "../components/Organisms/SideBar";
import MainTemplates from "../components/Template/MainTemplates";

export const metadata: Metadata = {
  title: "Statistics",
  description: "Statistics page",
};
export default function Statistics() {
  return (
    <MainTemplates>
      <SideBar/>
      <Main/>
    </MainTemplates>
  )
}
