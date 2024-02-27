import { Metadata } from "next";
import Main from "../components/Organisms/Main";
import SideBar from "../components/Organisms/SideBar";
import MainTemplates from "../components/Template/MainTemplates";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings page",
};
export default function Settings() {
  return (
    <MainTemplates>
      <SideBar/>
      <Main/>
    </MainTemplates>
  )
}
