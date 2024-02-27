import { Metadata } from "next";
import Main from "../components/Organisms/Main";
import SideBar from "../components/Organisms/SideBar";
import MainTemplates from "../components/Template/MainTemplates";

export const metadata: Metadata = {
  title: "Wallet",
  description: "Wallet page",
};
export default function Wallet() {
  return (
    <MainTemplates>
      <SideBar/>
      <Main/>
    </MainTemplates>
  )
}
