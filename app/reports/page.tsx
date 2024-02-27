import { Metadata } from "next";
import Main from "../components/Organisms/Main";
import SideBar from "../components/Organisms/SideBar";
import MainTemplates from "../components/Template/MainTemplates";

export const metadata: Metadata = {
  title: "Reports ",
  description: "reports page",
};
export default function Reports() {
  return (
    <MainTemplates>
      <SideBar/>
      <Main/>
    </MainTemplates>
  )
}
